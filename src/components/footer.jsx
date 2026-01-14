import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/footer.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        footerText
        footerIcons {
          url
          title
          description
        }
      }
    }
  `);

  const { footerText, footerIcons } = data.contentfulFooter || {};

  return (
    <footer>
      {footerText && (
        <ul>
          {footerText.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      )}
      {footerIcons && (
        <div className="footer-icons">
          {footerIcons.map((icon, idx) => (
            <img
              key={idx}
              src={icon.url}
              alt={icon.title || icon.description || "footer icon"}
            />
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;
