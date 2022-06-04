import React from "react";
import { LinkButton } from "./button";
import SectionText from "./section-text";
import SectionTitle from "./section-title";

const Hero = () => {
  return (
    <section className="container mx-auto px-10 flex my-36">
      <div className="w-full lg:w-1/2">
        <SectionTitle className="text-7xl">
          Welcome to Unimax Global
        </SectionTitle>
        <SectionText>
          Reimagine your brand. We provide full-service creativity to
          organizations.
        </SectionText>

        <LinkButton to="/contact">Contact</LinkButton>
      </div>
    </section>
  );
};

export default Hero;
