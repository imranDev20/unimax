import React from "react";
import ServiceDetailsPricingCard from "./ServiceDetailsPricingCard";

const ServiceDetailsPricing = ({ subServicePricing }) => {
  const {
    subServicePricingName,
    subServicePrice,
    subServicePricingCardImage,
    subServicePricingCardPoints,
  } = subServicePricing;
  return (
    <section>
      <div className="min-h-screen container mx-auto p-10">
        <div className="text-center py-6">
          <h2 className="text-4xl font-bold leading-tight text-primary">
            Start saving time today <br /> and{" "}
            <span className="text-secondary">choose</span> your best plan
          </h2>
          <p className="text-xl text-primary py-3">
            Best for freelance developers who need to <br /> save their time
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {subServicePricing.map((item) => (
            <ServiceDetailsPricingCard key={item?.strapi_id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPricing;
