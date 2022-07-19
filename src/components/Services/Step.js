import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const Step = ({ step, index }) => {
  const { stepName, stepImage, stepText } = step;
  return (
    <div className="bg-white flex flex-col items-center p-8 rounded-md hover:-translate-y-2 transition-all duration-500">
      <div className="text-center mb-4 pt-6">
        <span className="bg-secondary/20 text-secondary text-lg font-bold px-4 py-2 rounded-full">
          {index + 1}
        </span>
      </div>
      <div className="w-32 h-36 mt-4">
        <img
          className="w-full h-full object-contain"
          src={stepImage?.localFile?.publicURL}
          alt=""
        />
      </div>
      <div className="pb-4">
        <h3 className="text-xl font-bold py-3 text-center text-primary">
          {stepName}
        </h3>
        <p className="text-center text-primary">{stepText}</p>
      </div>
    </div>
  );
};

export default Step;
