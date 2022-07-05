import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SectionText from "../components/SectionText";
import SectionTitle from "../components/SectionTitle";

const TeamPage = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allStrapiTeam {
        nodes {
          slug
          name
          designation
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
  return (
    <Layout>
      <section className="container px-10 mx-auto">
        <p className="text-center mt-16 text-sm mb-10 uppercase">
          <Link
            className="hover:text-primary text-neutral-500 transition-colors"
            to="/"
          >
            Home
          </Link>{" "}
          / <span className="text-primary font-medium">Team</span>
        </p>
        <SectionTitle className="text-7xl text-center ">Team</SectionTitle>
        <SectionText className="max-w-5xl mx-auto text-center">
          We specialize in terms of developing data-driven web applications that
          automate business processes, manage information, and help you create a
          notable online presence in a secure network.
        </SectionText>
      </section>

      <section className="container px-10 mx-auto grid grid-cols-3"></section>
    </Layout>
  );
};

export default TeamPage;
