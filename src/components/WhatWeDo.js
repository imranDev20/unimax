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
      <div className="w-1/2 lg:ml-20">
        <h2 className="text-4xl font-semibold max-w-lg mb-10 leading-[50px] capitalize">
          Unimax unleashes your business potential by the constant innovation.
        </h2>
        <div className="mb-7">
          <h3 className="text-2xl font-medium mb-3">Company Benefits</h3>
          <p>
            Based in Paris, we work closely with clients from around the world,
            getting to the heart of their business to develop successful digital
            ideas and more.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-3">Company Benefits</h3>
          <p className="">
            Based in Paris, we work closely with clients from around the world,
            getting to the heart of their business to develop successful digital
            ideas and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
