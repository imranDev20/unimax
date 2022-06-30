import React from "react";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";
import WebDevelopment from "../images/web-development.svg";
import GraphicDesign from "../images/graphic-design.svg";
import Marketing from "../images/marketing.svg";
import SearchEngines from "../images/search-engines.svg";
import AppDevelopment from "../images/mobile-app.svg";
import Writing from "../images/writing.svg";

const Specialization = () => {
  const skills = [
    { id: 1, name: "Web Development", image: WebDevelopment },
    { id: 2, name: "Graphic Design", image: GraphicDesign },
    { id: 3, name: "Digital Marketing", image: Marketing },
    { id: 4, name: "Search Engine Optimization", image: SearchEngines },
    { id: 5, name: "Content Writing", image: Writing },
    { id: 6, name: "Mobile App", image: AppDevelopment },
  ];

  return (
    <section className="container mx-auto px-10 my-36">
      <SectionTitle className="text-5xl text-center">
        Our Specialization
      </SectionTitle>
      <SectionText className="max-w-5xl mx-auto text-center">
        We specialize in terms of developing data-driven web applications that
        automate business processes, manage information, and help you create a
        notable online presence in a secure network.
      </SectionText>

      <div className=" grid grid-cols-3 gap-10 my-10 auto-rows-fr">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="rounded-lg p-10 bg-white flex flex-col justify-center"
          >
            <div className="h-44 flex justify-center items-center">
              <img
                className="h-full object-cover"
                src={skill.image}
                alt={skill.name}
              />
            </div>
            <div className="">
              <h3 className="text-center text-3xl font-medium mt-10">
                {skill.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialization;
