module.exports = {
  pathPrefix: "/law-landing-page",
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  ],
}