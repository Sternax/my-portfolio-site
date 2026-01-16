import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import "../styles/layout.scss";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      allContentfulMenuItem {
        nodes {
          label
          order
          page {
            pageSlug
          }
        }
      }
    }
  `);
  const menuItems = Array.isArray(data?.allContentfulMenuItem?.nodes)
    ? data.allContentfulMenuItem.nodes.sort(
        (a, b) => (a.order || 0) - (b.order || 0)
      )
    : [];
  return (
    <div className="layout">
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Navbar menuItems={menuItems} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
