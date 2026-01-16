import React from "react";
import { graphql } from "gatsby";
import Portfolio from "../components/portfolioitem";
import Layout from "../components/layout";

export const query = graphql`
  query {
    allContentfulPortfolioItem {
      nodes {
        portfolioTitle
        portfolioDescription {
          portfolioDescription
        }
        portfolioImage {
          file {
            url
          }
          title
        }
        portfolioFeaturedImage {
          gatsbyImageData(formats: [WEBP, AUTO])
          title
        }
        portfolioLink
        portfolioRepo
        portfolioTechnologies {
          file {
            url
          }
          title
        }
        contentful_id
      }
    }
  }
`;

const PortfolioPage = ({ data }) => {
  return (
    <Layout>
      <Portfolio data={data} />
    </Layout>
  );
};
export default PortfolioPage;
