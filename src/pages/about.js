import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import SectionText from "../components/SectionText";
import Counter from "../components/Counter";
import Seo from "../components/Seo";
import WhatWeDo from "../components/WhatWeDo";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <section className="container mx-auto px-10">
        <p className="text-center mt-16 text-sm mb-10 uppercase">
          <Link
            className="hover:text-primary text-neutral-500 transition-colors"
            to="/"
          >
            Home
          </Link>{" "}
          / <span className="text-primary font-medium">About</span>
        </p>
        <SectionTitle className="text-5xl text-center">About Us</SectionTitle>
        <SectionText className="max-w-5xl mx-auto text-center">
          When it comes to online reviews, a high star rating isn’t enough to
          set your business apart from the competition. They want to know what
          exactly they liked so that they can gauge whether it aligns with their
          own preferences.
        </SectionText>
      </section>
      <WhatWeDo />
      <Counter />
    </Layout>
  );
};

export default AboutPage;
