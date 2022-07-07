import React from "react";
import { LinkButton } from "./Button";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";
import HeroBg from "../images/hero-bg.svg";
import { graphql, useStaticQuery } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      strapiPage(slug: { eq: "home" }) {
        id
        blocks {
          ... on STRAPI__COMPONENT_HOME_HERO {
            heroText
            heroTitle
            heroImage {
              localFile {
                url
                publicURL
              }
              alternativeText
            }
          }
        }
      }
    }
  `);

  console.log(data);
  const hero = data?.strapiPage?.blocks[0];
  return (
    <section className="container mx-auto px-10 flex items-center my-28">
      <div className="w-full lg:w-1/2">
        <SectionTitle className="text-7xl">{hero?.heroTitle}</SectionTitle>
        <SectionText>{hero?.heroText}</SectionText>
        <LinkButton to="/contact">Contact</LinkButton>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={hero?.heroImage?.localFile?.publicURL}
          alt={hero?.heroImage?.alternativeText}
        />
      </div>
    </section>
  );
};

export default Hero;
