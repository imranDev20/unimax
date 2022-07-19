import React from "react";
import Layout from "../components/Global/Layout";
import SectionTitle from "../components/Global/SectionTitle";
import SectionText from "../components/Global/SectionText";
import Seo from "../components/Global/Seo";
import AboutUnimax from "../components/About/AboutUnimax";
import Breadcrumb from "../components/Global/Breadcrumb";
import Faq from "../components/About/Faq";
import WhyChooseUs from "../components/About/WhyChooseUs";
import { graphql, useStaticQuery } from "gatsby";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      strapiPage(slug: { eq: "about" }) {
        label
        blocks {
          ... on STRAPI__COMPONENT_GLOBAL_PAGE_HEADER {
            pageHeaderText
          }
        }
      }
    }
  `);

  const { label } = data?.strapiPage;
  const { pageHeaderText } = data?.strapiPage?.blocks[0];

  return (
    <Layout>
      <Seo title="About" />
      <section className="container mx-auto px-10">
        <Breadcrumb second="about" />
        <SectionTitle className="text-5xl text-center">{label}</SectionTitle>
        <SectionText className="max-w-5xl mx-auto text-center">
          {pageHeaderText}
        </SectionText>
      </section>
      <AboutUnimax />
      <WhyChooseUs />
      <Faq />
    </Layout>
  );
};

export default AboutPage;
