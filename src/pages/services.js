import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Specialization from "../components/Specialization";

const ServicesPage = () => {
  return (
    <Layout>
      <Seo title="Services" />
      <Specialization isServicesPage />
    </Layout>
  );
};

export default ServicesPage;
