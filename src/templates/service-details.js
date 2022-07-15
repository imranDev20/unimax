import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const ServiceDetails = ({ data }) => {
  console.log(data);
  return <Layout>ServiceDetails</Layout>;
};

export default ServiceDetails;

export const query = graphql`
  query ($slug: String) {
    strapiService(slug: { eq: $slug }) {
      name
      slug
      strapi_id
    }
  }
`;
