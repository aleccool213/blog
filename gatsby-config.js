module.exports = {
  siteMetadata: {
    title: "Coffee Driven Development",
    author: "Alec Brunelle",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-108436339-1`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Coffee Driven Development",
        short_name: "CDD",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icons: [
          {
            src: `/favicons/coffee/favicon-36.png`,
            sizes: `36x36`,
            type: `image/png`,
          },
          {
            src: `/favicons/coffee/favicon-48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/favicons/coffee/favicon-57.png`,
            sizes: `57x57`,
            type: `image/png`,
          },
          {
            src: `/favicons/coffee/favicon-60.png`,
            sizes: `60x60`,
            type: `image/png`,
          },
          {
            src: `/favicons/coffee/favicon-72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/favicons/coffee/favicon-76.png`,
            sizes: `76x76`,
            type: `image/png`,
          },
          {
            src: `/favicons/coffee/favicon-96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/favicons/coffee/favicon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },

  ],
}
