/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby-Bootcamp - GraphQL",
    author: "Jonas Lutz und Youtube",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `/${__dirname}/src`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "kaffee.travel.blog",
        protocol: "https",
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret: process.env.WORDPRESS_SECRET,
          wpcom_app_clientId: 65671,
          wpcom_user: process.env.WORDPRESS_USERNAME,
          wpcom_pass: process.env.WORDPRESS_PASSWORD,
        },
        verboseOutput: true,
        /* searchAndReplaceContentUrls: {
          sourceUrl: "https://kaffee.travel.blog",
          replacementUrl:
            "https://kaffee.travel.blog",
        }, */

        includedRoutes: ["**/posts", "**/pages", "**/tags"],
      },
    },
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        canonicalBaseUrl: "https://eloquent-saha-5234d6.netlify.com",
        components: ["amp-form"],
        excludedPaths: ["/404*", "/"],
        pathIdentifier: "/amp/",
        relAmpHtmlPattern: "{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}",
        useAmpClientIdApi: true,
      },
    },
  ],
}
