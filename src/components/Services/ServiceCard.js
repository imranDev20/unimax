import React from "react";

const ServiceCard = (props) => {
  const { subServiceName, subServiceSummary, subServiceText, strapi_id } =
    props.service;

  const index = props?.index;
  return (
    <div>
      <span className="text-white bg-secondary font-medium px-4 py-2 rounded-md">
        {index}
      </span>
      <h3 className="text-xl font-bold text-primary mt-6">{subServiceName}</h3>
      <p className="text-primary mt-2 mb-6">{subServiceSummary}</p>
    </div>
  );
};

export default ServiceCard;
