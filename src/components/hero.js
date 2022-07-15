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

  const hero = data?.strapiPage?.blocks[0];
  return (
    <section className="container mx-auto px-10 flex flex-col lg:flex-row items-center my-28">
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-20 lg:mb-0">
        <SectionTitle className="text-5xl md:text-7xl">
          {hero?.heroTitle}
        </SectionTitle>
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
