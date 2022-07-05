const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allStrapiTeam {
        nodes {
          slug
        }
      }
    }
  `);

  data.allStrapiTeam.nodes.forEach((node) => {
    actions.createPage({
      path: "/team/" + node?.slug,
      component: path.resolve("./src/templates/member-details.js"),
      context: { slug: node?.slug },
    });
  });
};
