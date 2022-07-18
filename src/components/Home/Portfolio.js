import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import SectionText from "../Global/SectionText";
import SectionTitle from "../Global/SectionTitle";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiPortfolio {
        nodes {
          strapi_id
          slug
          name
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 480)
              }
            }
            alternativeText
          }
        }
      }
    }
  `);

  const portfolioItems = data?.allStrapiPortfolio?.nodes;

  return (
    <section className="container mx-auto px-10 my-36">
      <SectionTitle className="text-4xl md:text-5xl text-center">
        Our Portfolio
      </SectionTitle>
      <SectionText className="max-w-5xl mx-auto text-center">
        Every line of code and every pixel made is crafted with care by our
        in-house team. While being in a constant search of new horizons,
        challenges, and opportunities in the programming field, our main
        attention being in the following categories:
      </SectionText>

      <div className="mt-16">
        {portfolioItems.map((item, index) => (
          <PortfolioCard
            key={item?.strapi_id}
            item={item}
            index={index}
            isReverse
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
