import React from "react";
import ServiceDetailsPricingCard from "./ServiceDetailsPricingCard";

const ServiceDetailsPricing = () => {
  const prices = [
    {
      id: 1,
      name: "Startup",
      price: "$45.99",

      month: "user per month",
      email: "3 Emails",
      database: "1 Datebases",
      domains: "Unlimited Domains",
      storage: "10 GB Storage",
    },
    {
      id: 2,
      name: "Agency",

      price: "$65.99",
      month: "user per month",
      email: "6 Emails",
      database: "4 Datebases",
      domains: "Unlimited Domains",
      storage: "35GB Storage",
      isBlue: true,
    },
    {
      id: 3,
      name: "Enterprise",

      price: "$85.99",
      month: "user per month",
      email: "3 Emails",
      database: "8 Datebases",
      domains: "Unlimited Domains",
      storage: "50 GB Storage",
    },
  ];
  return (
    <section>
      <div className="min-h-screen container mx-auto p-10">
        <div className="text-center py-6">
          <h2 className="text-4xl font-bold leading-tight">
            Start saving time today <br /> and{" "}
            <span className="text-blue-500">choose</span> your best plan
          </h2>
          <p className="text-xl text-gray-400 py-3">
            Best for freelance developers who need to <br /> save their time
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {prices.map((price) => (
            <ServiceDetailsPricingCard
              key={price.id}
              price={price}
              isBlue={price.isBlue}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsPricing;
