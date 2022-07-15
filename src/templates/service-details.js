import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";
import Steps from "../components/Steps";
import ServiceDetailsMore from "../components/ServiceDetailsMore";
import ServiceDetailsPricing from "../components/ServiceDetailsPricing";
import Form from "../components/Form";

const ServiceDetails = ({ data }) => {
  console.log(data);

  const services = [
    {
      id: 1,
      name: "Web design UX/UI",
      intro:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.",
    },
    {
      id: 2,
      name: "React Develop",
      intro:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.",
    },
    {
      id: 3,
      name: "Ecommerce Build",
      intro:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.",
    },
    {
      id: 4,
      name: "Mern Development",
      intro:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.",
    },
  ];
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-10 py-20 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 px-6">
          <img className="w-full h-full max-h-[565px] object-cover" alt="" />
        </div>
        <div className="w-full lg:w-1/2 px-6">
          <div>
            <span className="text-blue-600 font-medium bg-cyan-400 px-3 py-1 rounded-full bg-opacity-10 mb-2">
              why choose us
            </span>
            <h2 className="text-4xl font-bold my-3">
              We Provide Best <br />
              <span className="text-blue-500">Web development</span> services
            </h2>
            <p className="my-2 text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
      <Steps />
      <ServiceDetailsMore />
      <ServiceDetailsPricing />
      <Form />
    </Layout>
  );
};

export default ServiceDetails;

export const query = graphql`
  query ($slug: String) {
    strapiService(slug: { eq: $slug }) {
      name
      slug
      strapi_id
    }
  }
`;
