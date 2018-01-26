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
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-',
            },
          },
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
        theme_color: "#996633",
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
          },
        ],
      },
    },
  ],
}
