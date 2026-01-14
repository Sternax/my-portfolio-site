import React from "react";
import { Link, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import "../styles/contact.scss";

export const query = graphql`
  query ContactPageQuery {
    allContentfulPage(filter: { pageType: { eq: "Contact" } }) {
      nodes {
        pageTitle
        pageBody {
          raw
        }
        pageType
        pageSlug
      }
    }
  }
`;

const ContactPage = ({ data }) => {
  const page = data?.allContentfulPage?.nodes?.[0];
  if (!page) {
    return null;
  }
  const body = page.pageBody ? JSON.parse(page.pageBody.raw) : null;
  return (
    <Layout>
      <div className="contact-page">
        {body && documentToReactComponents(body)}
        <Link className="btn btn-dark" to="/">
          Back to homepage
        </Link>
      </div>
    </Layout>
  );
};

export default ContactPage;
