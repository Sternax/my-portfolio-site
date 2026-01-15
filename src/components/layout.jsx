import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/layout.scss";

import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MenuItemsQuery {
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
      <Navbar menuItems={menuItems} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
