import React from "react";
import Layout from "../components/Global/Layout";
import SectionTitle from "../components/Global/SectionTitle";
import SectionText from "../components/Global/SectionText";
import Counter from "../components/Global/Counter";
import Seo from "../components/Global/Seo";
import WhatWeDo from "../components/About/WhatWeDo";
import Breadcrumb from "../components/Global/Breadcrumb";
import Faq from "../components/About/Faq";

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
