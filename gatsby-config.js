require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: `team`,
      queryParams: {
        populate: {
          image: "*",
          images: "*",
          avatar: {
            populate: "*",
          },
          skills: {
            populate: "*",
          },
          capabilities: {
            populate: "*",
          },
          socials: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: `service`,
      queryParams: {
        populate: {
          image: "*",
          images: "*",
          serviceImage: {
            populate: "*",
          },
          slug: {
            populate: "*",
          },
          subServices: {
            populate: "*",
          },
          steps: {
            populate: "*",
          },
          subServicePricing: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: `page`,
      queryParams: {
        populate: {
          image: "*",
          images: "*",
          blocks: {
            populate: {
              heroImage: {
                populate: "*",
              },
              featureIconStack: {
                populate: "*",
              },
              technologyStack: {
                populate: "*",
              },
              pageHeaderText: {
                populate: "*",
              },
              aboutImage: {
                populate: "*",
              },
            },
          },
        },
      },
    },
    {
      singularName: `portfolio`,
      queryParams: {
        populate: {
          image: "*",
          images: "*",
          technologies: {
            populate: "*",
          },
        },
      },
    },
  ],
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
        fonts: [
          "space grotesk:100,200,300,400,500,600,700,800,900",
          "playfair display:400,400i,500,500i,600,600i,700,700i",
        ],
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
