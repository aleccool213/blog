module.exports = {
  siteMetadata: {
    title: `Alec Brunelle's Blog`,
    author: `Alec Brunelle`,
    description: `A blog written by Alec Brunelle who lives and works in Toronto, building useful things. Software Development, Javascript, Elixir and not much else.`,
    siteUrl: `https://blog.alec.coffee`,
    social: {
      twitter: `yourboybigal`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true,
              withWebp: true,
              quality: 100
            }
          },
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
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              providers: {
                include: ["Instagram"]
              }
            }
          },
          `gatsby-remark-embed-gist`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`
        ]
      }
    },

    `gatsby-plugin-feed`,
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
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
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
        ignoreLocalhost: false,
        // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
        // False due to detailed information being personalized:
        // https://github.com/electerious/Ackee/blob/master/docs/Anonymization.md#personal-data
        detailed: false
      }
    }
  ]
};
