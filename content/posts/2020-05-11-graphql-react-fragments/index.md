---
title: A Better Way to use GraphQL Fragments in React
author: Alec Brunelle
hero: ./images/photo1.jpg
date: "2020-05-11T22:12:03.284Z"
canonical_url: ""
excerpt: Defining fragments inside the components that render data brings many benefits.
slug: "/better-way-to-use-graphql-in-react/"
---

One of the great reasons to use a component-based framework (React, Vue) is that it allows for more isolated component design, which helps with decoupling and unit-testing. Another benefit is using showcase apps such as [Storybook](https://storybook.js.org/), these continue the philosophy of isolation and allow for design and prototyping outside the main application. When component count starts to grow and we start to fetch data, we need a new pattern, [the Container Component pattern](https://learn.co/lessons/react-container-components). If using GraphQL for your data transport, we want to keep using this pattern but with a new twist. When creating isolated components, they should define the data they need to render. This can be better achieved by each component, even presentational ones, defining the data they need to render with their own GraphQL fragment.

## Show Time

Let's say we have a component which renders a list of Github issues showing their title. In the Container Component pattern, we would have a "container" component, `GithubIssueListContainer`, which handles running the query. After this, it passes down the data to its presentational components which need it to render, `GithubIssueInfoCard`.

```typescript
const GITHUB_ISSUES_LIST_QUERY = gql`
  query GithubIssuesListContainerQuery {
    organization {
      id
      name
    }
    issues {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        title
        description
      }
    }
  }
`;

const GithubIssueListContainer = () => {
  const { loading, error, data } = useQuery(GITHUB_ISSUES_LIST_QUERY);
  return (
    {data.issues.edges.map(
      edge =>
      (
        <span key={edge.node.id}>
          <GithubIssueInfoCard issueDetails={edge.node} />
        </span>
      ),
    )}
  );
}

interface GithubIssueInfoCardProps {
  issueDetails: {
    id: string;
    title: string;
    description: string;
  }
}

const GithubIssueInfoCard = ({ issueDetails }) => {
  return (
    <>
      {issueDetails.id} {issueDetails.title} {issueDetails.description}
    </>
  )
}
```

The issue here is that `GithubIssueInfoCard` is dependent on its parent component in its knowledge of where data comes from in the GraphQL graph.

If we want to render a new field from the graph, e.g. `labels`, we will need to add that to the query in `GithubIssueListContainer` and pass that down to `GithubIssueInfoCard` via props. This requires changes to the both the query in `GithubIssueListContainer` and the props in `GithubIssueInfoCard`.

## This is the Way

Following along our mantra of isolation, how about if `GithubIssueInfoCard` defined what data it needs to render from the GraphQL graph. That way, when we make changes to what data this component, only this component needs to change.

```typescript
const GITHUB_ISSUES_LIST_QUERY = gql`
  ${GITHUB_ISSUE_INFO_CARD_FRAGMENT}
  query GithubIssuesListContainerQuery {
    organization {
      id
      name
    }
    issues {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ...GithubIssueInfoCardFragment
        }
      }
    }
  }
`;

const GithubIssueListContainer = () => {
  const { data } = useQuery(GITHUB_ISSUES_LIST_QUERY);
  return (
    {data.issues.edges.map(
      edge =>
      (
        <span key={edge.node.id}>
          <GithubIssueInfoCard issueDetails={edge.node} />
        </span>
      ),
    )}
  );
}

export const GITHUB_ISSUE_INFO_CARD_FRAGMENT = gql`
  fragment GithubIssueInfoCardFragment on Issue {
    id
    title
    description
  }
`;

interface GithubIssueInfoCardProps {
  issueDetails: {
    id: string;
    title: string;
    description: string;
  }
}

const GithubIssueInfoCard = ({ issueDetails }) => {
  return (
    <>
      {issueDetails.id} {issueDetails.title} {issueDetails.description}
    </>
  )
}
```

This might seem odd at first, but the benefits are worth it. As with anything in programming it doesn't come without tradeoffs.

## Benefits

### Less parent component coupling

When components define the data it needs to render, it de-couples the component from its parent. If for example you wanted to show `GithubIssueInfoCard` on another page, import the fragment into that container component to get the right data fetched. e.g.

```typescript
import {
  GITHUB_ISSUE_INFO_CARD_FRAGMENT,
  GithubIssueInfoCard,
} from "./GithubIssueInfoCard";

const NOTIFICATIONS_LIST_QUERY = gql`
  ${GITHUB_ISSUE_INFO_CARD_FRAGMENT}
  query NotificationsContainerQuery {
    notifications {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
          eventText
          eventAssignee {
            id
            avatar
            username
          }
          relatedIssue {
            ...GithubIssueInfoCardFragment
          }
        }
      }
    }
  }
`;
```

### Types become easier to maintain

If using a TypeScript, you likely are generating types from your GraphQL queries. A large benefit of our new pattern comes with defining props in components. You can define the data it needs to render as a type from our generated type file.

```typescript
import { GithubIssueInfoCardFragment } from "../../graphql-types";

interface GithubIssueInfoCardProps {
  issueDetails: GithubIssueInfoCardFragment;
}
```

When the fragment changes, after you generate types, no prop changes needed!

### Less chance of changes when developing component first

With Storybook becoming popular, many developers are starting to develop components in Storybook first and the integrating them into the app at a later time. What may happen is that in app integration, props are defined incorrectly.

Defining the fragment of the GraphQL graph this component needs to render, there are less chances of code changes when integration happens due to forcing the developer to know the exact shape of the data it needs to render. This of course is only possible defining the api in advance which sometimes isn't always the case.

## Trade-offs

Of course, like everything in programming, there are trade-offs in this approach. It's up to you to see if it's worth it.

### Presentational components are not generic

The crummy thing is that our presentational components become more coupled to the application and API data model. If we want to migrate over to a component library for others to use, these components will need to be refactored to have their fragments removed. It's not too much work, but it is more work than the alternative.

### Fragments sometimes become difficult to manage

Importing many fragments into a single GraphQL query isn't the best experience. If we have many presentational components within a container component, importing them all can be hairy. Sometimes you may forget to import the fragment and Apollo can return some unhelpful messages.

```typescript
const GITHUB_ISSUES_LIST_QUERY = gql`
  ${GITHUB_ORG_INFO_CARD_FRAGMENT}
  ${GITHUB_ISSUE_COUNT_CARD_FRAGMENT}
  ${GITHUB_ISSUE_INFO_CARD_FRAGMENT}
  query GithubIssuesListContainerQuery {
    ...GithubOrgInfoCardFragment
    issues {
      ...GithubIssueCountCardFragment
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ...GithubIssueInfoCardFragment
        }
      }
    }
  }
`;
```

## Conclusion

We have been using this pattern at Yolk for a while now and it has grown on everyone. We develop our components first in Storybook and it forces the developer to understand where the data is coming from and ask questions about the data model and it's usage.
