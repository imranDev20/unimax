import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Global/Layout";
import ServiceCard from "../components/Services/ServiceCard";
import Steps from "../components/Services/Steps";
import ServiceDetailsMore from "../components/Services/ServiceDetailsMore";
import ServiceDetailsPricing from "../components/Services/ServiceDetailsPricing";
import Form from "../components/Global/Form";
import Seo from "../components/Global/Seo";

const ServiceDetails = ({ data }) => {
  const {
    name,
    slug,
    strapi_id,
    serviceImage,
    serviceSummary,
    subServicePricing,
    subServices,
  } = data?.strapiService;
  console.log(name);

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
      <Seo title={name} />
      <div className="min-h-screen container mx-auto px-10 py-20 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 px-6">
          <img
            src={serviceImage?.localFile?.publicURL}
            className="w-full h-full max-h-[565px] object-contain"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 px-6">
          <div>
            <h2 className="text-4xl font-bold my-3">
              We Provide Best <br />
              <span className="text-secondary">{name}</span> services
            </h2>
            <p className="my-2 text-primary text-lg mt-10">{serviceSummary}</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-6">
            {subServices.map((service) => (
              <ServiceCard
                key={service?.strapi_id}
                service={service}
              ></ServiceCard>
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
      serviceSummary
      serviceImage {
        localFile {
          publicURL
        }
      }
      subServices {
        subServiceName
        subServiceSummary
        strapi_id
        subServiceText {
          data {
            subServiceText
          }
        }
      }
      subServicePricing {
        strapi_id
        subServicePrice
        subServicePricingCardImage {
          localFile {
            publicURL
          }
        }
      }
      strapi_id
    }
  }
`;
