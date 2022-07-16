import React from "react";

const SectionText = ({ children, className }) => {
  return (
    <p className={`text-primary leading-7 text-lg my-5 ${className}`}>
      {children}
    </p>
  );
};

export default SectionText;
