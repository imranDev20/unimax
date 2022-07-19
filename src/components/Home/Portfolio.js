import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
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
          isEven
          liveLink
          githubLink
          summary
          technologies {
            id
            technologyName
          }
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

  const [list, setList] = useState([...portfolioItems.slice(0, 2)]);
  const [loadMore, setLoadMore] = useState(false);
  const [hasMore, setHasMore] = useState(portfolioItems.length > 2);

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true);
  };

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < portfolioItems.length;
      const nextResults = isMore
        ? portfolioItems.slice(currentLength, currentLength + 2)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]);

  useEffect(() => {
    const isMore = list.length < portfolioItems.length;
    setHasMore(isMore);
  }, [list]); //eslint-disable-line

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
        {list.map((item, index) => (
          <PortfolioCard key={item?.strapi_id} item={item} index={index} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {hasMore ? (
          <button
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        ) : (
          <p className="text-primary">No more results</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
