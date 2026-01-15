import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/footer.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        footerText
        footerIcons {
          file {
            url
          }
          title
          description
        }
      }
    }
  `);

  const { footerText, footerIcons } = data.contentfulFooter || {};

  return (
    <footer>
      {footerText && footerText.length > 0 && (
        <div className="footer-text">
          {footerText.map((text, idx) => (
            <div key={idx}>{text}</div>
          ))}
        </div>
      )}
      {footerIcons && (
        <div className="footer-icons">
          {footerIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon.file?.url}
              alt={icon.title || icon.description || "footer icon"}
            />
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;
