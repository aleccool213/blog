---
title: "Build a Next.js Blog with Cosmic’s GraphQL API"
author: Alec Brunelle
hero: ./images/photo1.jpg
date: "2020-09-18T22:12:03.284Z"
canonical_url: ""
excerpt: With so many choices for which technology to use when building a website, it can get overwhelming.
slug: "/build-next-js-blog-with-cosmics-graphql-api/"
---

---

Want to follow along with the build? [Click here to grab the app or fork the project.](https://www.cosmicjs.com/apps/nextjs-static-blog)

---

With so many choices for which technology to use when building a website, it can get overwhelming. You need to consider who is going to use it, what content to display and who will maintain it. A static website is a great choice when creating a blog, band website or e-commerce store. Static websites are an ode to the past when websites were just plain-ol files on a server you accessed via URL. They provide benefits like being fast, having great SEO and not being dependent on a certain runtime like PHP. This is in comparison to a server-rendered website like what you would have with Wordpress, Drupal or Ruby on Rails.

Static websites are built using static assets. The next question becomes where to store (and manage) this content. If you are a solo webmaster, the content can be files in a Git repo. If you have clients or other developers who will want to manage the content, a CMS (Content Management System) is what you need. A CMS is a service which stores your website content, for example blog posts and concert dates.

<div class="Image__Medium">
  <img src="https://res.cloudinary.com/dscgr6mcw/image/upload/v1600443356/next-js-cosmic-post/CleanShot_2020-09-18_at_10.15.26_2x.png" alt="Screenshot of the Cosmic CMS Dashboard"/>
  <figcaption>Cosmic CMS!</figcaption>
</div>

With [Next.js SSG](https://nextjs.org/docs/basic-features/pages#static-generation-recommended), we are using the CMS in a ["headless" fashion](https://www.cosmicjs.com/headless-cms). After trying a bunch of Headless CMS offerings, one I've stuck with is Cosmic. [Cosmic](https://www.cosmicjs.com) is an intuitive, powerful, and simple-to-use service which lets us get up and running quickly. They provide [many starter apps](https://www.cosmicjs.com/apps) that you can preview or fork. For example, I chose the Next.js Static Blog and had a production version of the website running in under **5 minutes**.

### Choosing the Tech

[Next.js](https://nextjs.org/) with GraphQL is my personal choice when it comes to Static site development. Next.js is a hybrid React framework which supports building static websites. It also lets you build [server-side rendered pages](https://nextjs.org/docs/basic-features/pages#server-side-rendering) when the need arises. It handles routing, has a large community supporting it making it one of the best ways to build a React app in 2020. The other tech you may have heard also does this is [Gatsby.js](https://www.gatsbyjs.com/). Gatsby is more user-friendly but is more opinionated with its technology choices (forced use of GraphQL versus it being a choice).

We are choosing to use GraphQL over [the Cosmic NPM module](https://www.npmjs.com/package/cosmicjs). [GraphQL](https://www.cosmicjs.com/blog/what-is-graphql) is a standardized way to get data from services and is a great choice when needing to get data from a CMS. As you create custom data types in Cosmic, you are able to query for it in the GraphQL API. One of the benefits of using GraphQL is that you are less dependent on a specific SDK.

## Tutorial

> For reference, I forked the example Cosmic Next.js project [here](https://github.com/vercel/next.js/tree/canary/examples/cms-cosmic).

### Creating the Cosmic Project

After creating an account on Cosmic and going through the product tour, you will be shown the “Create New Bucket” screen.

![Screenshot of the Cosmic CMS App Search Page](https://res.cloudinary.com/dscgr6mcw/image/upload/v1600443361/next-js-cosmic-post/CleanShot_2020-09-18_at_08.34.47_2x.png)

Click "Start with an App" then search and select "[Next.js Static Blog](https://www.cosmicjs.com/apps/nextjs-static-blog)" from the list of apps presented. This will do many of things.

1. Create a Cosmic bucket
2. Create sane data-types inside the bucket for use with a blog
3. Fill the bucket with demo content

![Screenshot of the Cosmic CMS Dashboard after creating a bucket](https://res.cloudinary.com/dscgr6mcw/image/upload/v1599827352/next-js-cosmic-post/CleanShot_2020-09-11_at_08.28.20_2x.png)

Here is what the created bucket looks like on your Cosmic dashboard

### Next.js local development

The next thing we need to do is clone the Next.js code to our local environments. This will enable us to run the Next.js locally and pull content from the demo Cosmic bucket we created.

```bash
git clone git@github.com:aleccool213/nextjs-cosmic-graphql-app.git
```

You can also choose to create a GitHub repository for yourself using [the template](https://github.com/aleccool213/nextjs-cosmic-graphql-app/generate).

Once inside the new directory, make sure you are using the correct Node.js version by using [NVM](https://github.com/nvm-sh/nvm).

```bash
nvm use v12.18.3
```

Install Yarn and install the project dependencies.

```bash
brew install yarn && yarn
```

Run the app!

```bash
yarn dev
```

![Screenshot of the app running locally but encountering an error due to no environment variables being set](https://res.cloudinary.com/dscgr6mcw/image/upload/v1599828409/next-js-cosmic-post/CleanShot_2020-09-11_at_08.46.14_2x.png)

Almost there!

### Cosmic Environment Variables

Before we are able to query the Cosmic GraphQL API, our app needs to know where it lives. Environment Variables are deployment specific values which contain sensitive things like API keys.

There are three env vars we need to define to have the app work locally. Create a file named `.env.local` (don't worry it's ignored by Git), it should look like this:

```bash
COSMIC_BUCKET_SLUG=demo-nextjs-static-blog
COSMIC_READ_KEY=77H1zN7bTktdsgekxyB9FTpOrlVNE3KUP0UTptn5EqA7T0J8Qt
# Preview secret can be anything you choose
COSMIC_PREVIEW_SECRET=iwvrzpakhaavqbihwlrv
```

To get these values, head over to the Settings sidebar menu in your bucket, and click "Basic Settings".

Run the app again with `yarn dev`

![Screenshot of the example blog running on a local machine](https://res.cloudinary.com/dscgr6mcw/image/upload/v1599829500/next-js-cosmic-post/CleanShot_2020-09-11_at_09.04.40_2x.png)

And we are up!

### Looking inside the box

There are two things that we need to understand when it comes to Statically-Generated Next.js apps, pages and routes. [Pages are content which depend on external data](https://nextjs.org/docs/basic-features/pages#scenario-1-your-page-content-depends-on-external-data), and [routes are URL routes which depend on external data](https://nextjs.org/docs/basic-features/pages#scenario-1-your-page-content-depends-on-external-data). Both have you defining special Next.js specific functions, `getStaticProps` and `getStaticPaths`.

The file which contains the logic for generating page content based on the Cosmic GraphQL API is located at [pages/posts/[slug].js](https://github.com/aleccool213/nextjs-cosmic-graphql-app/blob/661144a8eddebff19c709ec18ad8e1765f7600ec/pages/posts/%5Bslug%5D.js#L57).

```javascript
export async function getStaticProps({ params, preview = null }) {
  // Get the data from the API
  const data = await getPostAndMorePosts(params.slug, preview);
  // Convert markdown content to HTML content
  const content = await markdownToHtml(data.post?.metadata?.content || "");
  return {
    props: {
      preview,
      post: {
        ...data.post,
        content,
      },
      morePosts: data.morePosts || [],
    },
  };
}
```

```javascript
export async function getPostAndMorePosts(slug, preview) {
  // Query for the data through the Cosmic GraphQL API using Apollo Client
  ...
  const moreObjectsResults = await client.query({
    query: gql`
      query getPostQuery(
        $bucketSlug: String!
        $readKey: String!
        $status: status
      ) {
        getObjects(
          bucket_slug: $bucketSlug
          input: {
            read_key: $readKey
            type: "posts"
            status: $status
            limit: 3
          }
        ) {
          objects {
            _id
            slug
            title
            metadata
            created_at
          }
        }
      }
    `,
    variables: {
      bucketSlug: BUCKET_SLUG,
      readKey: READ_KEY,
      status,
    },
  });
```

This is one example of a page using `getStaticProps`. It is [also used in the Index page](https://github.com/aleccool213/nextjs-cosmic-graphql-app/blob/661144a8eddebff19c709ec18ad8e1765f7600ec/pages/index.js#L40) for getting all the blog post titles and excerpts.

`pages/posts/[slug].js` [also contains `getStaticPaths`](https://github.com/aleccool213/nextjs-cosmic-graphql-app/blob/661144a8eddebff19c709ec18ad8e1765f7600ec/pages/posts/%5Bslug%5D.js#L73) which tells our Next.js app which routes to generate.

```javascript
export async function getStaticPaths() {
  // Get all post data (including content)
  const allPosts = (await getAllPostsWithSlug()) || [];
  return {
    // Tell Next.js all of the potential URL routes based on slugs
    paths: allPosts.map((post) => `/posts/${post.slug}`),
    fallback: true,
  };
}
```

After understanding these two aspects, the blog is just a regular React app.

## Deploying

Now that we have our website working locally, let's deploy it to [Vercel](https://vercel.com/). The first step is making sure you have the code in a Git repository.

I recommend you have the code in GitHub. You can use the [GitHub CLI](https://cli.github.com/) to create a repo in your current directory with `gh repo create`.

We now need to sign up for Vercel and have it use the code from the GitHub repo. You can sign up for Vercel with your GitHub account [here](https://vercel.com/signup). You can import the code from GitHub using the "Import Project" feature.

![Screenshot of the Vercel project view with the Import Project button highlighted](https://res.cloudinary.com/dscgr6mcw/image/upload/v1600443380/next-js-cosmic-post/CleanShot_2020-09-16_at_08.34.54_2x.png)

When importing the project, make sure you define the environment variables, `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_PREVIEW_SECRET`.

When deployed, all pushes to your default Git branch will have Vercel deploy a new version of your website!

## Bonus

### Previewing

> The Next.js docs on preview mode are right [here](https://nextjs.org/docs/advanced-features/preview-mode).

Local development and deploying the website to production will cover most of your use-cases. Another common workflow is saving a draft of changes on your CMS and then previewing those changes on your local machine. To do so, we will enable "Preview" mode both on Cosmic and our Next.js app.

First thing we will need to do is have Cosmic know that the Posts object type will be preview-able. On the Posts setting page, add the preview link.

```bash
http://localhost:3000/api/preview?secret=iwvrzpakhaavqbihwlrv&slug=[object_slug]
```

When finished, click "Save Object Type".

Let's try editing a post and see it show up on our local machine. Try changing the title of "Learn How to Pre-render Pages Using Static Generation with Next.js" and click "Save Draft" instead of "Publish".

![Screenshot of the Cosmic CMS Post data type editing page with Save Draft button highlighted](https://res.cloudinary.com/dscgr6mcw/image/upload/v1600443385/next-js-cosmic-post/CleanShot_2020-09-16_at_08.45.27_2x.png)

The `Save Draft` button

We now have unpublished changes. Run the app locally with `yarn dev` and then click "Preview" right under "Save Draft".

![Screenshot of the example blog running on a local machine with the preview edits being shown](https://res.cloudinary.com/dscgr6mcw/image/upload/v1600443400/next-js-cosmic-post/CleanShot_2020-09-16_at_09.20.58_2x.png)

Our preview mode!

### Webhooks

> Note this feature requires a Cosmic paid plan

The only way to deploy new content to our blog is to have a developer push to the default git branch. This action will trigger Vercel take the new code and push a new version of our website. We ideally want our content creators to have the same control. Webhooks are a way we can do this.

Let's set up a webhook which lets Vercel know when our posts in Cosmic have new updates. This will let us deploy new versions of the website without developers needing to do anything.

Go to the Git integration settings page (https://vercel.com/[project]/settings/git-integration) in your Vercel project and create a new Deploy Hook named "Cosmic Hook".

![Screenshot of the Vercel webhook settings](https://res.cloudinary.com/dscgr6mcw/image/upload/v1600443413/next-js-cosmic-post/CleanShot_2020-09-18_at_08.02.26_2x.png)

What your settings should look like when the webhook is created

Now over in Cosmic settings, we can add this webhook. Let's add Cosmic notify Vercel when changes get published. You can see how we can do this for previews as well if we wanted to in the future.

![Screenshot of the Cosmic CMS webhooks settings](https://res.cloudinary.com/dscgr6mcw/image/upload/v1600443424/next-js-cosmic-post/CleanShot_2020-09-18_at_08.05.34_2x.png)

Edited/Created and Published!

To test this go to the same post we tested Previews with and add some content to the end of the article and publish. You should see a deploy happen on Vercel with the new content deployed to the live version of your website!

## Conclusion

Want to see what the final website looks like? [Click here to check it out.](https://nextjs-cosmic-graphql-app.vercel.app/)
