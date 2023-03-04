/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })
  const {
  author,
  siteTitle,
  siteShortTitle,
  siteDescription,
  siteIcon, 
  siteLanguage,
  seoTitleSuffix
  } = require("./config")
module.exports = {

  siteMetadata: {
    author,
    siteTitle,
    siteShortTitle, 
    siteDescription,
    siteIcon, 
    siteLanguage,
    seoTitleSuffix
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // spaceId: process.env.SPACE_ID,
        // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId:"yakbeysh0blf",
        accessToken:"yP-r8cMOdzc2eJxDYYI3abX_6Nqzeb5i8W_LiOwL598",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
}
