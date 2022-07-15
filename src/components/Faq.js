import React from "react";
import Accordion from "../components/Accordion";

const Faq = () => {
  return (
    <section className="container px-10 mx-auto mt-36 flex justify-between">
      <div className="w-1/2">
        <h2 className="text-5xl font-bold max-w-md">
          Frequently Asked Questions
        </h2>
        <p className="max-w-sm mt-5 text-primary">
          Unimax Global takes into consideration every little detail to make
          sure the system runs smoothly and responsively.
        </p>
      </div>
      <div className="w-1/2">
        {[0, 1, 2, 3].map((n) => (
          <Accordion key={n} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
