import React from "react";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";
import ReactIcon from "../images/icons/react.svg";
import JavaScript from "../images/icons/javascript.svg";
import Strapi from "../images/icons/strapi.svg";
import WordPress from "../images/icons/wordpress.svg";
import { graphql, useStaticQuery } from "gatsby";

const Technologies = () => {
  const data = useStaticQuery(graphql`
    query TechnologyQuery {
      strapiPage {
        blocks {
          ... on STRAPI__COMPONENT_HOME_TECHNOLOGIES {
            technologyStack {
              strapi_id
              technologyImage {
                localFile {
                  publicURL
                  url
                }
              }
              technologyName
            }
          }
        }
      }
    }
  `);

  const techData = data?.strapiPage?.blocks[2]?.technologyStack;

  return (
    <section className="container mx-auto px-10">
      <SectionTitle className="text-4xl md:text-5xl text-center">
        Technologies
      </SectionTitle>
      <SectionText className="max-w-5xl mx-auto text-center">
        We use the best industrial-level technologies for all our projects and
        management to ensure the best quality of our work. Our team constantly
        researches about new tools and incorporates the best ones in our line of
        work.
      </SectionText>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mt-20">
        {techData.map((tech) => (
          <div
            key={tech?.strapi_id}
            className="p-3 flex flex-col justify-center items-center"
          >
            <div className="w-16 h-20 ">
              <img
                className="w-full h-full object-contain"
                src={tech?.technologyImage?.localFile?.publicURL}
                alt={tech?.technologyName}
              />
            </div>
            <h3 className="text-center mt-7 text-2xl font-medium">
              {tech?.technologyName}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
