import React from "react";
import Step from "./Step";

const Steps = () => {
  const steps = [
    {
      id: 1,
      name: "Project Initialization",

      description:
        "Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.",
    },
    {
      id: 2,
      name: "Looking for Creative",

      description:
        "Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.",
    },
    {
      id: 3,
      name: "Market Development",

      description:
        "Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.",
    },
  ];
  return (
    <section className="bg-slate-100 py-10">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between py-6">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold">
              We are <span className="text-blue-500">awesome team</span>
              <br />
              for your business dream
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-justify text-gray-400 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis. Quisque vitae nulla malesuada,
              auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
              imperdiet.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {steps.map((step) => (
            <Step key={step.id} step={step}></Step>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
