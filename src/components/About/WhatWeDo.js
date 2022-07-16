import React from "react";

const WhatWeDo = () => {
  return (
    <section className="counter mx-auto px-10 mt-28 flex justify-between">
      <div className="w-1/2">
        <div className="rounded-lg h-full max-h-[550px] px-10">
          <img
            className="w-full h-full rounded object-cover"
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="w-1/2 lg:ml-20 text-primary">
        <h2 className="text-5xl font-semibold max-w-lg mb-10 leading-[50px] capitalize">
          About Unimax Global
        </h2>

        <p>
          Our web design company specializes in the professional creation of
          unique sites.
        </p>
        <blockquote className="my-5">
          <span className="font-['playfair_display'] italic text-3xl my-3 font-medium">
            “Alone we can do so little, together we can do so much”
          </span>{" "}
          – <span className="text-secondary">Hellen Keller</span>
        </blockquote>
        <p>
          Unimax Global was established five years prior with the principal
          objective of making a working environment giving all-in-one solutions
          for IT-related issues and spreading our administrations from one side
          of the planet to the other.
        </p>
        <p className="mt-3">
          Our team constantly monitors the emergence of new technologies that we
          are not afraid to implement in web projects. We create only selling
          websites – this is an achievement by drawing the design and working
          out usability. The approach to each new project is individual, we
          treat every customer equally, regardless of the size of the company
          and its budget.
        </p>
        <p className="mt-3">
          We pride ourselves, on the quality of our work, our dedication to
          truly understanding our client's goals, and our execution helping them
          realize them.
        </p>
        <p className="mt-3">
          Schedule a meeting at the link below to get a quote and timeline on
          your project today.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
