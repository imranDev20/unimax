import * as React from "react";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import Layout from "../components/Global/Layout";
import Portfolio from "../components/Home/Portfolio";
import Process from "../components/Home/Process";
import Seo from "../components/Global/Seo";
import Specialization from "../components/Home/Specialization";
import Technologies from "../components/Home/Technologies";
import Testimonials from "../components/Home/Testimonials";

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
