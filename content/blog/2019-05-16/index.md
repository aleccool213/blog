---
title: Wrestling with Apollo Local State and winning 🤼‍♂️
date: "2019-05-16T22:12:03.284Z"
path: "/apollo-local-state-pains/"
logoUrl: ""
devLink: ""
---

<table class="image">
  <caption align="bottom">Photo by Samuel Castro on <a href="https://unsplash.com/photos/cwScwJy5HQE">Unsplash</a></caption>
  <tr><td><img src="./photo1.jpg" alt="local-village"/></td></tr>
</table>

Recently we bought into [GraphQL](https://graphql.org/) and use it in every one of our web apps, both on the client and server level. It’s been helpful reducing unnecessary communication needed between our different teams when it comes to knowing what our many, many different API’s do. This contributes to our async work strategy and keeps developers moving and focusing on difficult problems versus organizational bloat.

For use with our frontend applications, we opted for [Apollo Client](https://github.com/apollographql/apollo-client) with [React](https://github.com/apollographql/react-apollo) which seems to be the one true GraphQL client at this point. As the library is fairly new (the javascript ecosystem moves fast, who knew?) we have experienced our fair share of pains and troubleshooting. Some of which included:

- Using [Apollo Local State](https://www.apollographql.com/docs/react/essentials/local-state) on a large codebase and running in production
- Integration with Server Side Rendering ([Next.js](https://nextjs.org/))
- [Generating Typescript types](https://github.com/apollographql/apollo-tooling#apollo-clientcodegen-output) on a [stitched schema](https://www.apollographql.com/docs/graphql-tools/schema-stitching)

This article focuses on the first point, managing frontend local state. When looking for state management solutions, Apollo Local State ([formally apollo-link-state](https://github.com/apollographql/apollo-link-state/blob/master/README.md#L5)) popped up. A couple of reasons led us to using this library:

- The data models and store structure can be shared between the data fetching cache and the local state management cache
  - This leads to sharing of Typescript types as well 😉
- Actions are performed with mutations, something that previous GraphQL users already understand.
- Staying within the Apollo ecosystem meant smooth integration with existing tools, meaning less overhead for developers.
- Backed by Apollo meant that support would be there for a significant amount of time.

Another good sign was [this very attractive article](https://blog.apollographql.com/reducing-our-redux-code-with-react-apollo-5091b9de9c2a) which explains the advantages of keeping your local state close to the GraphQL schema vs using something like Redux.

## Here comes the pain

A pattern established by [Flux](https://facebook.github.io/flux/docs/in-depth-overview.html#content) (the paradigm, not the library), has you splitting up actions for every event which happens in your app. User clicked a button, action is triggered, user scrolls down a certain length, action is triggered. Your app can observe these actions and manipulate the state accordingly. With Apollo Local State Mutations, this becomes much more intentional. No observability is given, each action is directly related to a resolver.

For example, you want to update a name on an issue (think GitHub just for examples sake) in the cache, this is Apollo’s term for state:

`gist:aleccool213/8654b97f7e908cd9a09ade70ab8d1f10#apollo_client_mutation_component_example_1.tsx`

For this above mutation, here is an example of what we would need to write in Typescript, I break down what’s going on in the comments:

`gist:aleccool213/3cec5fc7d337975543e0a546b5da2675#apollo_client_mutation_resolver_example_1.tsx`

That’s 60 lines to update a single attribute on one data entity in the cache. After doing a couple of these, you will start to pull your hair out. Mutations as is, don’t do a whole lot for you, this results in **a lot of boilerplate**. Having all of the boilerplate code is not ideal, it leads to more bugs and thus more tests need to be written to avoid those bugs.

## Looking for patterns

After writing about ten of these with plans to write a lot more, we wrote a small [Yeoman](https://yeoman.io/) generator to speed up the process. This made writing them a lot faster but didn’t solve the bloat in our codebase. Every mutation ended up doing the same thing as described in the comments above:

1. Get the id of the object in the cache using the actual entity id
2. Get the data from the cache
3. Update the data locally
4. Write the data back to the cache

## The solution

Naturally, we wrote a helper which would help us refactor our resolvers.

`gist:aleccool213/2c05dda3e017d7c2af699da435f5e895#createResolver.ts`

This resulted in the resolver code becoming a small [pure](https://en.wikipedia.org/wiki/Pure_function) func:

`gist:aleccool213/3e989c485f04f19ef1a1c1af324ac5f3#apollo_client_mutation_resolver_example_2.tsx`

A two-line resolver which does the same as before. This covered about **90%** **of our use-cases**!

## The road ahead

If you found this blog post helpful, don’t hesitate to steal the [gist](https://gist.github.com/aleccool213/2c05dda3e017d7c2af699da435f5e895) of this code.
