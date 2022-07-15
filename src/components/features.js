import React from "react";
import SectionTitle from "./SectionTitle";
import ExperienceIcon from "../images/icons/experience.svg";
import TeamIcon from "../images/icons/team.svg";
import SolutionIcon from "../images/icons/solution.svg";
import { graphql, useStaticQuery } from "gatsby";

const Features = () => {
  const data = useStaticQuery(graphql`
    query FeaturesQuery {
      strapiPage(slug: { eq: "home" }) {
        id
        blocks {
          ... on STRAPI__COMPONENT_HOME_FEATURES {
            id
            featureIconStack {
              featureText
              featureName
              strapi_id
              featureIcon {
                id
                localFile {
                  publicURL
                  url
                }
                alternativeText
              }
            }
          }
        }
      }
    }
  `);

  const features = data?.strapiPage?.blocks[1]?.featureIconStack;
  console.log(features);

  return (
    <section className="container mx-auto px-10 my-36">
      <SectionTitle className="text-4xl md:text-5xl text-center">
        Exciting Features of Unimax
      </SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-16">
        {features.map((feature) => (
          <div
            key={feature?.strapi_id}
            className="rounded-lg transition duration-200 flex items-center  lg:p-7"
          >
            <div className="w-1/6 mr-7">
              <img
                className="object-contain"
                src={feature?.featureIcon?.localFile?.publicURL}
                alt={feature?.featureIcon?.alternativeText}
              />
            </div>
            <div className="w-5/6">
              <h3 className="text-3xl font-medium mb-5">
                {feature?.featureName}
              </h3>
              <p className="text-primary leading-7 text-2md">
                {feature?.featureText}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
