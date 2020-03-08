module.exports = {
  siteMetadata: {
    title: `Alec Brunelle's Blog`,
    name: "Alec Brunelle",
    siteUrl: `https://blog.alec.coffee`,
    description: `Written by Alec Brunelle who lives and works in Toronto building useful things.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/yourboybigal`
      },
      {
        name: `github`,
        url: `https://github.com/aleccool213`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/alecbrunelle/`
      },
      {
        name: `unsplash`,
        url: `https://unsplash.com/@aleccool21`
      },
      {
        name: `medium`,
        url: `https://medium.com/@yourboybigal`
      },
      {
        name: `stackoverflow`,
        url: `https://stackoverflow.com/users/3287767/aleccool21`
      }
    ],
    hero: {
      heading: `Alec Brunelle's Blog`,
      maxWidth: 652
    }
  },
  plugins: [
    {
      resolve: "@alec.brunelle/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        rootPath: "/",
        basePath: "/",
        mailchimp: false,
        sources: {
          local: true,
          contentful: false
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              noIframeBorder: true //Optional: Disable insertion of <style> border: 0
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alec Brunelle's Blog`,
        short_name: `AB Blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#996633`,
        display: `minimal-ui`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-favicon`,
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
        // Domatin ID found when adding a domain in the admin panel.
        domainId: "348d7407-1f83-41dc-a620-f1b8de3acb15",
        // URL to Server eg: "https://analytics.test.com".
        server: "https://ackee-instance.herokuapp.com",
        // Disabled analytic tracking when running localy
        ignoreLocalhost: true,
        // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
        // False due to detailed information being personalized:
        // https://github.com/electerious/Ackee/blob/master/docs/Anonymization.md#personal-data
        detailed: false
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://coffee.us15.list-manage.com/subscribe/post?u=a3148896870d61ede572df801&amp;id=c1e98351d4"
      }
    }
  ]
};
