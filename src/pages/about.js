import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import SectionText from "../components/SectionText";
import Counter from "../components/Counter";
import Seo from "../components/Seo";
import WhatWeDo from "../components/WhatWeDo";
import Accordion from "../components/Accordion";
import Breadcrumb from "../components/Breadcrumb";

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
      <section className="container px-10 mx-auto mt-36 flex justify-between">
        <div className="w-1/2">
          <h2 className="">Digital solutions for your online business.</h2>
        </div>
        <div className="w-1/2">
          {[0, 1, 2, 3].map((n) => (
            <Accordion key={n} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
