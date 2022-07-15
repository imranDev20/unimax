import React from "react";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";
import WebDevelopment from "../images/web-development.svg";
import GraphicDesign from "../images/graphic-design.svg";
import Marketing from "../images/marketing.svg";
import SearchEngines from "../images/search-engines.svg";
import AppDevelopment from "../images/mobile-app.svg";
import Writing from "../images/writing.svg";
import { graphql, Link, useStaticQuery } from "gatsby";
import Breadcrumb from "./Breadcrumb";

const Specialization = ({ isServicesPage }) => {
  const data = useStaticQuery(graphql`
    query SpecializationQuery {
      allStrapiService {
        nodes {
          serviceImage {
            localFile {
              publicURL
              url
            }
          }
          strapi_id
          name
          slug
          serviceSummary
        }
      }
    }
  `);

  const skillsData = data?.allStrapiService?.nodes;

  return (
    <section
      className={`container mx-auto px-10 ${!isServicesPage && "my-36"} `}
    >
      {isServicesPage && <Breadcrumb second="services" />}
      <SectionTitle className="text-4xl md:text-5xl text-center">
        Our Specialization
      </SectionTitle>
      <SectionText className="max-w-5xl mx-auto text-center">
        We specialize in terms of developing data-driven web applications that
        automate business processes, manage information, and help you create a
        notable online presence in a secure network.
      </SectionText>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 auto-rows-fr">
        {skillsData.map((skill) => (
          <div
            key={skill?.strapi_id}
            className="rounded-lg p-10 bg-white flex flex-col justify-center shadow-custom"
          >
            <Link to={`/services/${skill?.slug}`}>
              <div className="h-44 flex justify-center items-center">
                <img
                  className="h-full object-cover"
                  src={skill?.serviceImage?.localFile?.publicURL}
                  alt={skill?.name}
                />
              </div>
            </Link>

            <Link to={`/services/${skill?.slug}`}>
              <h3 className="text-center text-3xl font-medium mt-10 hover:text-secondary transition-colors">
                {skill?.name}
              </h3>
            </Link>
            {isServicesPage && (
              <p className="text-center mt-5 text-primary">
                {skill?.serviceSummary}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialization;
