import React from "react";
import Layout from "../components/layout";
import Image from "react-bootstrap/Image";
import { graphql, Link } from "gatsby";

const PortfolioItemTemplate = ({ data }) => {
  const item = data.contentfulPortfolioItem;
  return (
    <Layout>
      <div className="portfolio-single">
        <h1>{item.portfolioTitle}</h1>
        <p>{item.portfolioDescription?.portfolioDescription}</p>
        {Array.isArray(item.portfolioImage)
          ? item.portfolioImage.map((img, idx) =>
              img?.file?.url ? (
                <Image
                  key={img.file.url + idx}
                  src={img.file.url}
                  alt={img.title}
                  className="portfolio-grid__image"
                  fluid
                  rounded
                />
              ) : null
            )
          : item.portfolioImage?.file?.url && (
              <Image
                src={item.portfolioImage.file.url}
                alt={item.portfolioImage.title}
                className="portfolio-grid__image"
                fluid
                rounded
              />
            )}
        {Array.isArray(item.portfolioTechnologies) &&
          item.portfolioTechnologies.length > 0 && (
            <div className="portfolio-technologies">
              {item.portfolioTechnologies.map((tech, tIdx) =>
                tech?.file?.url ? (
                  <img
                    key={tech.file.url + tIdx}
                    src={tech.file.url}
                    alt={tech.title || "Technology"}
                    className="portfolio-tech-icon"
                    style={{ width: 32, height: 32, marginRight: 8 }}
                  />
                ) : null
              )}
            </div>
          )}
        {item.portfolioRepo && (
          <Link
            to={item.portfolioRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark portfolio-repo-btn"
          >
            View Repo
          </Link>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PortfolioItemBySlug($slug: String!) {
    contentfulPortfolioItem(portfolioLink: { eq: $slug }) {
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
        file {
          url
        }
        title
      }
      portfolioRepo
      portfolioTechnologies {
        file {
          url
        }
        title
      }
      portfolioLink
      contentful_id
    }
  }
`;

export default PortfolioItemTemplate;
