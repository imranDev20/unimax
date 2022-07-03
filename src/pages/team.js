import { Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SectionText from "../components/SectionText";
import SectionTitle from "../components/SectionTitle";

const TeamPage = () => {
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

      <section className="container px-10 mx-auto grid grid-cols-3">
        <div className="">
          <div>
            <img
              src="https://unimaxglobal.net/wp-content/uploads/elementor/thumbs/Zakir-Hossain-1-pof6rg8hqg9maijyquaguknkal3g9jqwoqzq19ay6g.jpg"
              alt=""
            />
          </div>

          <h4>Zakir Hossain</h4>
          <p>Founder & CEO</p>
          <p>'Quality Is Our Commitment'</p>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
