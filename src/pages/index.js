import * as React from "react";
import Features from "../components/features";
import Hero from "../components/hero";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
};

export default IndexPage;
