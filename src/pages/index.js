import * as React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Seo from "../components/Seo";
import Specialization from "../components/Specialization";
import Technologies from "../components/Technologies";
import Testimonials from "../components/Testimonials";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Specialization />
      <Features />
      <Portfolio />
      <Technologies />
      <Process />
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
