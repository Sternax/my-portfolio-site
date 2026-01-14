import React from "react";
import Introduction from "../components/introduction";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../styles/index.scss";
import "../styles/global.scss";
import "../styles/clash-display.css";

export const query = graphql`
  query {
    contentfulIntroduction(contentful_id: { eq: "0U0OPFuNxShJNo7sFWn5V" }) {
      introductionRole
      introductionTitle
      introductionText {
        introductionText
      }
      introductionImage {
        file {
          url
        }
        title
      }
      introductionLink
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Introduction data={data} />
    </Layout>
  );
};

export default IndexPage;
