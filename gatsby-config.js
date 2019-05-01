module.exports = {
  siteMetadata: {
    title: `Coffee Driven Development`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-108436339-1`
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coffee Driven Development`,
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
    `gatsby-plugin-favicon`
  ]
};
