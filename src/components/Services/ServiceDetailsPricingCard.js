import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const ServiceDetailsPricingCard = ({ item }) => {
  console.log(item);

  const {
    strapi_id,
    subServicePrice,
    subServicePricingCardImage,
    subServicePricingCardPoints,
    subServicePricingName,
    isColored,
  } = item;
  return (
    <div
      className={`flex flex-col items-center border p-8 rounded-md hover:-translate-y-2 transition-all duration-500 ${
        isColored && "bg-secondary"
      }`}
    >
      <div className="w-24 h-24 my-6">
        <img
          className="w-full h-full object-contain"
          src={subServicePricingCardImage?.localFile?.publicURL}
          alt=""
        />
      </div>
      <div>
        <h2
          className={`text-2xl text-center font-bold py-2 ${
            isColored && "text-white"
          }`}
        >
          {subServicePricingName}
        </h2>
        <p
          className={`text-4xl text-center font-bold text-secondary pb-2 ${
            isColored && "text-white"
          }`}
        >
          ${subServicePrice}
        </p>
      </div>
      <div className="my-5">
        {subServicePricingCardPoints?.map((point) => (
          <p
            className={`flex items-center text-lg mb-2 ${
              isColored ? "text-white" : "text-primary"
            }`}
          >
            <BsCheckCircle className="mr-2" />
            {point.subServicePricingCardPoint}
          </p>
        ))}
      </div>
      <button
        className={`${
          isColored ? "bg-white text-secondary" : "bg-secondary text-white "
        } hover:bg-primary ${
          isColored && "hover:text-white"
        } transition duration-300 px-6 py-2 text-lg font-medium rounded `}
      >
        Choose
      </button>
    </div>
  );
};

export default ServiceDetailsPricingCard;
