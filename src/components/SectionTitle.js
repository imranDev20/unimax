import React from "react";

const SectionTitle = ({ children, className }) => {
  return (
    <h2 className={`${className} font-bold md:leading-10 lg:leading-[4.5rem]`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
