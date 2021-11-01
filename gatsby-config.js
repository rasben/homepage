module.exports = {
  siteMetadata: {
    title: `rasben`,
    author: {
      name: `Benjamin Rasmussen`,
      summary: `Lives and works in Copenhagen, building web things.`,
    },
    description: ``,
    siteUrl: `https://rasben.gatsbyjs.io/`,
    social: {
      twitter: `rasben_`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `rasben.net`,
      },
    },
  ],
}
