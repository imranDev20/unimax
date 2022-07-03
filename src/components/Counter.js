import React from "react";
import CounterBlock from "./CounterBlock";

const Counter = () => {
  return (
    <section className="container mx-auto px-10 mt-96 flex justify-between">
      <div className="w-1/2">
        <h2 className="text-5xl font-bold max-w-md">
          We generated 2x more online sales in 2021.
        </h2>
        <p className="max-w-sm mt-6">
          The biggest brands in the automotive industry recommend our company as
          a reliable corporate website developer
        </p>
      </div>
      <div className="w-1/2 grid grid-cols-2 rounded-lg overflow-hidden">
        <CounterBlock target={99} title="Recommended" duration={2} symbol="+" />
        <CounterBlock target={99} title="Recommended" duration={2} symbol="+" />
        <CounterBlock target={99} title="Recommended" duration={2} symbol="+" />
        <CounterBlock target={99} title="Recommended" duration={2} symbol="+" />
      </div>
    </section>
  );
};

export default Counter;
