require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["article", "company", "author"],
  singleTypes: [],
};

module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    title: `Unimax Global`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `@imrankabir97`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-postcss",
    {
      resolve: "@slixites/gatsby-plugin-google-fonts",
      options: {
        fonts: ["space grotesk:100,200,300,400,500,600,700,800,900"],
        display: "swap",
        preconnect: true,
        attributes: {
          rel: "stylesheet preload prefetch",
          as: "style",
        },
      },
    },
  ],
};
