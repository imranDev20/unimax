import React from "react";

const Step = (props) => {
  const { id, name, image, description } = props.step;
  return (
    <div className="bg-white flex flex-col items-center p-8 rounded-md hover:-translate-y-2 transition-all duration-500">
      <div className="text-center mb-4 pt-6">
        <span className="bg-blue-300 text-blue-700 text-lg font-bold px-4 py-2 rounded-full">
          {id}
        </span>
      </div>
      <div className="w-32 h-36 mt-4">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="pb-4">
        <h3 className="text-xl font-bold py-3 text-center">{name}</h3>
        <p className="text-center text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Step;
