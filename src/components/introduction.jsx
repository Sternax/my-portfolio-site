import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "gatsby";

const Introduction = ({ data }) => {
  const intro = data?.contentfulIntroduction;
  if (!intro) {
    return (
      <div>
        No introduction content found. Check if the entry is published and the
        ID is correct.
      </div>
    );
  }
  return (
    <>
      <div class="introduction-section">
        <div className="introduction-content">
          <div className="introduction-content__text">
            <h4>{intro.introductionRole}</h4>
            <h1>{intro.introductionTitle}</h1>
            <p>{intro.introductionText?.introductionText}</p>
          </div>
          <div className="introduction-content__button">
            <Link to={intro.introductionLink} className="btn btn-dark">
              Contact
            </Link>
          </div>
        </div>
        <div className="introduction-section__image">
          {intro.introductionImage && (
            <Image
              src={intro.introductionImage.file.url}
              alt={intro.introductionImage.title}
              style={{ maxWidth: "400px" }}
              fluid
              rounded
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Introduction;
