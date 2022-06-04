import React from "react";
import SectionTitle from "./section-title";
import ExperienceIcon from "../images/icons/experience.svg";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: ExperienceIcon,
      title: "Big Experience",
      text: "Many years of work in this field is an excellent indicator that companies trust us and in response we offer unique solutions.",
    },
    {
      id: 2,
      title: "Strong Team",
      text: "An excellent team of professionals will help you to bring all your ideas to life in the best possible way and with flexible functionality.",
    },
    {
      id: 3,
      title: "Big Experience",
      text: "Many years of work in this field is an excellent indicator that companies trust us and in response we offer unique solutions.",
    },
    {
      id: 4,
      title: "Big Experience",
      text: "Many years of work in this field is an excellent indicator that companies trust us and in response we offer unique solutions.",
    },
    {
      id: 5,
      title: "Big Experience",
      text: "Many years of work in this field is an excellent indicator that companies trust us and in response we offer unique solutions.",
    },
    {
      id: 6,
      title: "Big Experience",
      text: "Many years of work in this field is an excellent indicator that companies trust us and in response we offer unique solutions.",
    },
  ];
  return (
    <section className="container mx-auto px-10 my-20">
      <SectionTitle className="text-5xl text-center">
        Exciting Features of Unimax
      </SectionTitle>
      <div className="grid grid-cols-2 gap-16 mt-16">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="rounded-lg transition duration-200 flex"
          >
            <div className="w-48 mr-5 mb-5">
              <img className="object-cover" src={ExperienceIcon} alt="" />
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-5">{feature.title}</h3>
              <p className="text-primary leading-7 text-lg">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
