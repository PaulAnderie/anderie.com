module.exports = {
  siteMetadata: {
    title: `Paul Anderie - Online-Marketing Berater`,
    description: `Willkommen auf Paul's Seite. Klicke auf die schnellste Seite, die du bisher gesehen hast.`,
    author: `@paulanderie`,
  },
  plugins: [
    `gatsby-plugin-sass`,

    {
       resolve: "gatsby-transformer-remark",
       options: {
         plugins: [
         {
           resolve: "gatsby-remark-embed-video",
           options: {
             width: 800,
             ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
             height: 400, // Optional: Overrides optional.ratio
             related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
             noIframeBorder: true //Optional: Disable insertion of <style> border: 0
           }
         }
         ]
       }
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/PA.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-5ZDZG76",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
