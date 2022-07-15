import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allStrapiPortfolio {
        nodes {
          strapi_id
          slug
          name
          images {
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

      <div className="grid grid-cols-2 lg:grid-cols-3 mt-16 gap-10">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item?.strapi_id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
