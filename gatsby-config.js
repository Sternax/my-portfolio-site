/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Axel Sterner Portfolio`,
    description: `The portfolio site of Axel Sterner, a web developer specializing in front-end development. Showcasing projects, tech stack, and contact information.`,
    siteUrl: `https://asterner.netlify.app/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./static/site-icon.png",
        name: "Axel Sterner Portfolio",
        short_name: "Portfolio",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "minimal-ui",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
