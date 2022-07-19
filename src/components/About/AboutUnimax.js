import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import sanitizeHtml from "sanitize-html";

const AboutUnimax = () => {
  const data = useStaticQuery(graphql`
    query AboutUnimaxQuery {
      strapiPage(slug: { eq: "about" }) {
        blocks {
          ... on STRAPI__COMPONENT_ABOUT_ABOUT {
            aboutText {
              data {
                aboutText
              }
            }
            aboutTitle
            aboutImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: TRACED_SVG)
                }
              }
              alternativeText
            }
          }
        }
      }
    }
  `);

  const { aboutTitle, aboutText, aboutImage } = data?.strapiPage?.blocks[1];
  return (
    <section className="container mx-auto px-10 mt-28 flex justify-between">
      <div className="w-1/2 max-h-[550px] px-10">
        <GatsbyImage
          className="rounded-lg h-full"
          imgClassName="w-full h-full"
          objectFit="cover"
          alt={aboutImage?.alternativeText}
          image={getImage(aboutImage?.localFile)}
        />
      </div>
      <div className="w-1/2 lg:ml-20 text-primary">
        <h2 className="text-5xl font-semibold max-w-lg mb-10 leading-[50px] capitalize">
          {aboutTitle}
        </h2>

        <div
          className="text-primary ck-content"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(aboutText?.data?.aboutText),
          }}
        />
      </div>
    </section>
  );
};

export default AboutUnimax;
