import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../styles/global.scss";
import "../styles/404.scss";

export const query = graphql`
  query NotFoundPageQuery {
    allContentfulPage(filter: { pageType: { eq: "404" } }) {
      nodes {
        pageTitle
        pageSlug
        pageType
        pageBody {
          raw
        }
      }
    }
  }
`;

const NotFoundPage = ({ data }) => {
  const page = data?.allContentfulPage?.nodes?.[0];
  if (!page) {
    return null;
  }
  const body = page.pageBody ? JSON.parse(page.pageBody.raw) : null;
  return (
    <Layout>
      <div className="notfound-content">
        <h1>{page.pageTitle}</h1>
        {body && documentToReactComponents(body)}
        <Link to="/">Go back to homepage</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
