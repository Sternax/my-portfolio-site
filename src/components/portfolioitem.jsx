import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Image from "react-bootstrap/Image";
import "../styles/portfolio.scss";
import { Link } from "gatsby";

const Portfolio = ({ data }) => {
  const items = data?.allContentfulPortfolioItem?.nodes || [];
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      {items.length === 0 ? (
        <div>No portfolio items found.</div>
      ) : (
        <div className="portfolio-card-list">
          {items.map((item, idx) => (
            <div
              key={item.contentful_id}
              className={`portfolio-card${openIndex === idx ? " open" : ""}`}
            >
              {item.portfolioFeaturedImage?.gatsbyImageData && (
                <GatsbyImage
                  image={item.portfolioFeaturedImage.gatsbyImageData}
                  alt={item.portfolioFeaturedImage.title || "Featured"}
                  className="portfolio-featured-image"
                />
              )}
              <Link
                to={`/${item.portfolioLink.replace(/^\/+/, "")}`}
                className="portfolio-title-link"
              >
                {item.portfolioTitle}
              </Link>
              {openIndex !== idx && (
                <button
                  className="portfolio-dropdown-btn"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`desc-${item.contentful_id}`}
                >
                  <img
                    src="/arrow-down.svg"
                    alt="Expand"
                    className="arrow rotated"
                  />
                </button>
              )}
              <div
                id={`desc-${item.contentful_id}`}
                className={
                  "portfolio-description" + (openIndex === idx ? " open" : "")
                }
                aria-hidden={openIndex === idx ? "false" : "true"}
                style={{ pointerEvents: openIndex === idx ? "auto" : "none" }}
              >
                <p>{item.portfolioDescription?.portfolioDescription}</p>
                {Array.isArray(item.portfolioTechnologies) &&
                  item.portfolioTechnologies.length > 0 && (
                    <div className="portfolio-technologies">
                      <p>Technologies Used:</p>
                      {item.portfolioTechnologies.map((tech, tIdx) =>
                        tech?.file?.url ? (
                          <Image
                            key={tech.file.url + tIdx}
                            src={tech.file.url}
                            alt={tech.title || "Technology"}
                            className="portfolio-tech-icon"
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
                {openIndex === idx && (
                  <button
                    className="portfolio-dropdown-btn portfolio-dropdown-btn--centered"
                    onClick={() => handleToggle(idx)}
                    aria-expanded={openIndex === idx}
                    aria-controls={`desc-${item.contentful_id}`}
                  >
                    <img
                      src="/arrow-down.svg"
                      alt="Collapse"
                      className="arrow"
                    />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Portfolio;
