import * as React from "react";
import Features from "../components/features";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Process from "../components/Process";
import Seo from "../components/Seo";
import Specialization from "../components/specialization";
import Technologies from "../components/technologies";
import Testimonials from "../components/Testimonials";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Specialization />
      <Features />
      <Technologies />
      <Process />
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
