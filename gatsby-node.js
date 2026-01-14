const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulPortfolioItem {
        nodes {
          portfolioLink
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const items = result.data.allContentfulPortfolioItem.nodes;
  items.forEach((item) => {
    createPage({
      path: item.portfolioLink,
      component: path.resolve("./src/templates/portfolio-item.jsx"),
      context: {
        slug: item.portfolioLink,
      },
    });
  });
};
