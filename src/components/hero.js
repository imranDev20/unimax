import React from "react";
import { LinkButton } from "./Button";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";
import HeroBg from "../images/hero-bg.svg";

const Hero = () => {
  return (
    <section className="container mx-auto px-10 flex items-center my-28">
      <div className="w-full lg:w-1/2">
        <SectionTitle className="text-7xl">
          Welcome to Unimax Global
        </SectionTitle>
        <SectionText>
          Unimax Global follows by its principle of building an all-in-one IT
          solution place where no clients have to turn back! We have everything
          you need to construct an eye-catching online platform that follows the
          trend and falls fight into place.
        </SectionText>
        <LinkButton to="/contact">Contact</LinkButton>
      </div>
      <div className="w-full lg:w-1/2">
        <img className="w-full h-full object-cover" src={HeroBg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
