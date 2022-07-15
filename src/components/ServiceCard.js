import React from "react";

const ServiceCard = (props) => {
  const { id, name, intro } = props.service;
  return (
    <div>
      <span className="text-white bg-blue-500 font-medium px-4 py-2 rounded-md">
        {id}
      </span>
      <h3 className="text-xl font-bold text-gray-800 mt-6">{name}</h3>
      <p className="text-gray-400 mt-2 mb-6">{intro}</p>
    </div>
  );
};

export default ServiceCard;
