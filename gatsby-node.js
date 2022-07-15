const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allStrapiTeam {
        nodes {
          slug
        }
      }
      allStrapiService {
        nodes {
          slug
        }
      }
    }
  `);

  data?.allStrapiTeam?.nodes?.forEach((node) => {
    actions.createPage({
      path: "/team/" + node?.slug,
      component: path.resolve("./src/templates/member-details.js"),
      context: { slug: node?.slug },
    });
  });

  data?.allStrapiService?.nodes?.forEach((node) => {
    console.log(node);
    actions.createPage({
      path: "/services/" + node?.slug,
      component: path.resolve("./src/templates/service-details.js"),
      context: { slug: node?.slug },
    });
  });
};
