import { graphql, Link, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";
import Breadcrumb from "../components/Global/Breadcrumb";
import Layout from "../components/Global/Layout";
import SectionText from "../components/Global/SectionText";
import SectionTitle from "../components/Global/SectionTitle";
import TeamCard from "../components/Team/TeamCard";

const TeamPage = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allStrapiTeam(sort: { order: ASC, fields: strapi_id }) {
        nodes {
          slug
          name
          designation
          expertiseType
          strapi_id
          avatar {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);

  const team = data?.allStrapiTeam?.nodes;
  return (
    <Layout>
      <section className="container px-10 mx-auto">
        <Breadcrumb second="team" />
        <SectionTitle className="text-7xl text-center ">Team</SectionTitle>
        <SectionText className="max-w-5xl mx-auto text-center">
          We specialize in terms of developing data-driven web applications that
          automate business processes, manage information, and help you create a
          notable online presence in a secure network.
        </SectionText>
      </section>

      <section className="container px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
        {team.map((member) => (
          <TeamCard
            key={member?.strapi_id}
            image={getImage(member?.avatar?.localFile)}
            name={member?.name}
            slug={member?.slug}
            designation={member?.designation}
            expertiseType={member?.expertiseType}
          />
        ))}
      </section>
    </Layout>
  );
};

export default TeamPage;
