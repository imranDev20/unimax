import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const ServiceDetailsPricingCard = (props) => {
  const {
    name,
    image,
    price,
    month,
    email,
    database,
    domains,
    storage,
    isBlue,
  } = props.price;

  return (
    <div
      className={`flex flex-col items-center border p-8 rounded-md hover:-translate-y-2 transition-all duration-500 ${
        isBlue && "bg-blue-500"
      }`}
    >
      <div className="w-24 h-24 my-6">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div>
        <h2 className={`text-3xl font-bold py-2 ${isBlue && "text-white"}`}>
          {name}
        </h2>
        <h3
          className={`text-3xl font-bold text-blue-600 pb-2 ${
            isBlue && "text-white"
          }`}
        >
          {price}
        </h3>
        <p
          className={`text-gray-400 text-lg font-medium ${
            isBlue && "text-white"
          }`}
        >
          {month}
        </p>
      </div>
      <div className="my-5">
        <p
          className={`flex items-center text-gray-400 text-lg mb-2 ${
            isBlue && "text-white"
          }`}
        >
          <BsCheckCircle className="mr-2" />
          {email}
        </p>
        <p
          className={`flex items-center text-gray-400 text-lg mb-2 ${
            isBlue && "text-white"
          }`}
        >
          <BsCheckCircle className="mr-2" />
          {database}
        </p>
        <p className="flex items-center text-gray-400 text-lg mb-2">
          <BsCheckCircle className="mr-2" />
          {domains}
        </p>
        <p className="flex items-center text-gray-400 text-lg mb-2">
          <BsCheckCircle className="mr-2" />
          {storage}
        </p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 px-6 py-2 text-lg text-white font-medium rounded">
        Purchase
      </button>
    </div>
  );
};

export default ServiceDetailsPricingCard;

const Price = (props) => {
  const {
    name,
    image,
    price,
    month,
    email,
    database,
    domains,
    storage,
    isBlue,
  } = props.price;
  return (
    <div
      className={`flex flex-col items-center border p-8 rounded-md hover:-translate-y-2 transition-all duration-500 ${
        isBlue && "bg-blue-500"
      }`}
    >
      <div className="w-24 h-24 my-6">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div>
        <h2 className={`text-3xl font-bold py-2 ${isBlue && "text-white"}`}>
          {name}
        </h2>
        <h3
          className={`text-3xl font-bold text-blue-600 pb-2 ${
            isBlue && "text-white"
          }`}
        >
          {price}
        </h3>
        <p
          className={`text-gray-400 text-lg font-medium ${
            isBlue && "text-white"
          }`}
        >
          {month}
        </p>
      </div>
      <div className="my-5">
        <p
          className={`flex items-center text-gray-400 text-lg mb-2 ${
            isBlue && "text-white"
          }`}
        >
          <BsCheckCircle className="mr-2" />
          {email}
        </p>
        <p
          className={`flex items-center text-gray-400 text-lg mb-2 ${
            isBlue && "text-white"
          }`}
        >
          <BsCheckCircle className="mr-2" />
          {database}
        </p>
        <p className="flex items-center text-gray-400 text-lg mb-2">
          <BsCheckCircle className="mr-2" />
          {domains}
        </p>
        <p className="flex items-center text-gray-400 text-lg mb-2">
          <BsCheckCircle className="mr-2" />
          {storage}
        </p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 px-6 py-2 text-lg text-white font-medium rounded">
        Purchase
      </button>
    </div>
  );
};
