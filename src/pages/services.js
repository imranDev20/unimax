import React from "react";
import Layout from "../components/Global/Layout";
import Seo from "../components/Global/Seo";
import Specialization from "../components/Home/Specialization";

const ServicesPage = () => {
  return (
    <Layout>
      <Seo title="Services" />
      <Specialization isServicesPage />
    </Layout>
  );
};

export default ServicesPage;
