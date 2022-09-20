module.exports = {
  siteMetadata: {
    title: `Earth & Elle`,
    description: `Empowering Supplements`,
    author: 'Trevor Micek',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "244538520908459",
      },
    },
        'gatsby-plugin-postcss',
        'gatsby-plugin-netlify',
        {
          resolve: 'gatsby-source-trustpilot',
          options: {
              apiKey: 'YOUR_TRUSTPILOT_API_KEY',
              secretKey: 'YOUR_TRUSTPILOT_SECRET_KEY',
              username: 'YOUR_TRUSTPILOT_USERNAME',
              password: 'YOUR_TRUSTPILOT_PASSWORD',
              domains: [
                  'trustpilot.co.uk' // An array of website URLs to pull the reviews for
              ]
          }
      },
        {
      resolve: `gatsby-plugin-google-gtag`,

      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "AW-374462516", // Google Analytics / GA
          "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],

      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/newImages/Logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
