import { Link } from "gatsby";
import React from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import SectionText from "../components/SectionText";
import SectionTitle from "../components/SectionTitle";

const ContactPage = () => {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-10">
        <p className="text-center mt-16 text-sm mb-10 uppercase">
          <Link
            className="hover:text-primary text-neutral-500 transition-colors"
            to="/"
          >
            Home
          </Link>{" "}
          / <span className="text-primary font-medium">Contact</span>
        </p>
        <SectionTitle className="text-5xl text-center">
          Get in Touch
        </SectionTitle>
        <SectionText className="max-w-5xl mx-auto text-center">
          When it comes to online reviews, a high star rating isn’t enough to
          set your business apart from the competition. They want to know what
          exactly they liked so that they can gauge whether it aligns with their
          own preferences.
        </SectionText>
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
