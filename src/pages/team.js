import React from "react";
import Layout from "../components/Layout";
import SectionText from "../components/SectionText";
import SectionTitle from "../components/SectionTitle";

const TeamPage = () => {
  return (
    <Layout>
      <section className="container px-10 mx-auto">
        <SectionTitle className="text-5xl text-center">Team</SectionTitle>
        <SectionText className="max-w-5xl mx-auto text-center">
          We specialize in terms of developing data-driven web applications that
          automate business processes, manage information, and help you create a
          notable online presence in a secure network.
        </SectionText>
      </section>
    </Layout>
  );
};

export default TeamPage;
