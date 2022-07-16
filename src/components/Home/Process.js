import React from "react";
import SectionTitle from "../Global/SectionTitle";
import SectionText from "../Global/SectionText";
import WebProcessImage from "../../images/web-process.png";

const Process = () => {
  return (
    <section className="my-36 max-w-6xl mx-auto px-10">
      <SectionTitle className="text-4xl md:text-5xl text-center">
        Our Working Process
      </SectionTitle>
      <SectionText className="max-w-5xl mx-auto text-center">
        Find out how following a structured website design process can help you
        deliver more successful websites faster and more efficiently. Try Unimax
        Global today.
      </SectionText>
      <div className="mt-20">
        <img className="w-full object-contain" src={WebProcessImage} alt="" />
      </div>
    </section>
  );
};

export default Process;
