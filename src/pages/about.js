import React from "react";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import SectionText from "../components/SectionText";
import Counter from "../components/Counter";
import Seo from "../components/Seo";
import WhatWeDo from "../components/WhatWeDo";
import Breadcrumb from "../components/Breadcrumb";
import Faq from "../components/Faq";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <section className="container mx-auto px-10">
        <Breadcrumb second="about" />
        <SectionTitle className="text-5xl text-center">About Us</SectionTitle>
        <SectionText className="max-w-5xl mx-auto text-center">
          We Ensure Quality & Best Service Website Design, Development & Graphic
          Design
        </SectionText>
      </section>
      <WhatWeDo />
      <Counter />
      <Faq />
    </Layout>
  );
};

export default AboutPage;
