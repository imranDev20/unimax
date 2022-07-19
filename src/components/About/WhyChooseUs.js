import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ChooseUsCounterBlock from "./ChooseUsCounterBlock";

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto px-10 mt-48 flex justify-between">
      <div className="w-1/2">
        <h2 className="text-5xl font-bold max-w-md">Why Choose Us</h2>
        <p className="max-w-sm mt-10 font-['playfair_display'] italic text-3xl my-3 font-medium text-primary">
          Reach out to the world’s most reliable IT services.
        </p>

        <p className="max-w-sm mt-5 text-primary">
          The IT services that Unimax Global are running can be segmented by the
          type of skills employed to deliver the service (design, build, run).
        </p>
        <p className="max-w-sm mt-5 text-primary">
          Technically, these fall into three main categories: business process
          services, application services, and infrastructure services.
        </p>
      </div>
      <div className="w-1/2 max-w-md mx-auto grid grid-cols-2 rounded-lg overflow-hidden shadow-custom bg-white">
        <ChooseUsCounterBlock
          first
          target={15}
          title="Skilled Team Members"
          duration={2}
          symbol="+"
        />
        <ChooseUsCounterBlock
          second
          target={115}
          title="Satisfied Customers"
          duration={2}
          symbol="+"
        />
        <ChooseUsCounterBlock
          third
          target={65}
          title="Successfull Projects"
          duration={2}
          symbol="+"
        />
        <ChooseUsCounterBlock
          fourth
          target={5}
          title="Years of Experience"
          duration={2}
          symbol="+"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
