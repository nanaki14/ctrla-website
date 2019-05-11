module.exports = {
  siteMetadata: {
    title: `Ctrl+A`,
    description: `Ctrl+A は秋葉原 MOGRA で隔月開催されているクラブイベントです。`,
    author: `@ctrladj`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        background_color: `#ffffff`,
        theme_color: `#ffff00`,
        display: `minimal-ui`,
        icon: `src/assets/images/webclip.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['M PLUS 1p'],
        },
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        // spreadsheetId: require('./secret-spreadsheet.json'),
        worksheetTitle: 'Artist',
        credentials: require('./secret-google-drive.json'),
      },
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
        // spreadsheetId: require('./secret-spreadsheet.json'),
        worksheetTitle: 'Event',
        credentials: require('./secret-google-drive.json'),
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'ctrla.tokyo',
      },
    },
  ],
}
