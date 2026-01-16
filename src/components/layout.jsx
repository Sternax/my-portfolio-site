import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import "../styles/layout.scss";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
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
        <meta
          property="og:url"
          content={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:image" content="/site-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="asterner.netlify.app" />
        <meta
          property="twitter:url"
          content={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
        />
        <meta name="twitter:title" content={data.site.siteMetadata.title} />
        <meta
          name="twitter:description"
          content={data.site.siteMetadata.description}
        />
        <meta name="twitter:image" content="/site-icon.png" />
        <link
          rel="canonical"
          href={`${data.site.siteMetadata.siteUrl}${location.pathname}`}
        />
      </Helmet>
      <Navbar menuItems={menuItems} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
