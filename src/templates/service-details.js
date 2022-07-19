import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Global/Layout";
import ServiceCard from "../components/Services/ServiceCard";
import Steps from "../components/Services/Steps";
import ServiceDetailsMore from "../components/Services/ServiceDetailsMore";
import ServiceDetailsPricing from "../components/Services/ServiceDetailsPricing";
import Form from "../components/Global/Form";
import Seo from "../components/Global/Seo";
import Breadcrumb from "../components/Global/Breadcrumb";
import SectionTitle from "../components/Global/SectionTitle";

const ServiceDetails = ({ data }) => {
  const {
    name,
    slug,
    strapi_id,
    serviceImage,
    serviceSummary,
    subServicePricing,
    steps,
    subServices,
  } = data?.strapiService;

  return (
    <Layout>
      <Seo title={name} />
      <Breadcrumb second="services" third={name} />
      <SectionTitle className="text-5xl text-center">{name}</SectionTitle>
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
            <h2 className="text-4xl font-bold my-3 text-primary">
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
      <Steps steps={steps} />
      <ServiceDetailsMore subServices={subServices} />
      <ServiceDetailsPricing subServicePricing={subServicePricing} />

      <section className="container mx-auto px-10">
        <h2 className="text-4xl font-bold my-3 text-primary text-center">
          Contact Us
        </h2>
        <div className="max-w-lg mx-auto">
          <Form />
        </div>
      </section>
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
        isReverse
        subServiceImage {
          localFile {
            publicURL
          }
        }
        subServiceText {
          data {
            subServiceText
          }
        }
      }
      steps {
        id
        stepName
        stepText

        stepImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
            publicURL
          }
        }
      }
      subServicePricing {
        strapi_id
        subServicePricingName
        subServicePrice
        isColored
        subServicePricingCardImage {
          localFile {
            publicURL
          }
        }
        subServicePricingCardPoints {
          subServicePricingCardPoint
        }
      }
      strapi_id
    }
  }
`;
