import React from "react";
import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";
import ReactIcon from "../images/icons/react.svg";
import JavaScript from "../images/icons/javascript.svg";
import Strapi from "../images/icons/strapi.svg";
import WordPress from "../images/icons/wordpress.svg";

const Technologies = () => {
  const techs = [
    { id: 1, name: "React.js", icon: ReactIcon },
    { id: 2, name: "JavaScript", icon: JavaScript },
    { id: 3, name: "Strapi", icon: Strapi },
    { id: 4, name: "WordPress", icon: WordPress },
    { id: 5, name: "React.js", icon: ReactIcon },
    { id: 6, name: "React.js", icon: ReactIcon },
    { id: 7, name: "React.js", icon: ReactIcon },
    { id: 8, name: "React.js", icon: ReactIcon },
    { id: 9, name: "Strapi", icon: Strapi },
    { id: 10, name: "React.js", icon: ReactIcon },
    { id: 11, name: "React.js", icon: ReactIcon },
    { id: 12, name: "React.js", icon: ReactIcon },
  ];
  return (
    <section className="container mx-auto px-10">
      <SectionTitle className="text-5xl text-center">Technologies</SectionTitle>
      <SectionText className="max-w-5xl mx-auto text-center">
        We use the best industrial-level technologies for all our projects and
        management to ensure the best quality of our work. Our team constantly
        researches about new tools and incorporates the best ones in our line of
        work.
      </SectionText>

      <div className="grid grid-cols-6 gap-12 mt-20">
        {techs.map((tech) => (
          <div
            key={tech.id}
            className="p-3 flex flex-col justify-center items-center"
          >
            <div className="w-16 h-16 ">
              <img className="w-full object-cover" src={tech.icon} alt="" />
            </div>
            <h3 className="text-center mt-7 text-2xl font-medium">
              {tech.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
