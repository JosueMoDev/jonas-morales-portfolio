/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
  const {
    siteDescription,
    siteTitle,
    navLinks,
    name
  } = require("./config")
module.exports = {

  siteMetadata: {
    siteDescription,
    siteTitle,
    navLinks:navLinks,
    name
  },
  plugins: [`gatsby-plugin-postcss`],
}
