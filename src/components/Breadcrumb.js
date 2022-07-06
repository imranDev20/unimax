import React from "react";
import { Link } from "gatsby";

const Breadcrumb = ({ second, third }) => {
  return (
    <p className="text-center mt-16 text-xs mb-10 uppercase tracking-widest">
      <Link
        className="hover:text-primary text-neutral-500 transition-colors"
        to="/"
      >
        Home
      </Link>{" "}
      /{" "}
      {second && third ? (
        <Link
          className="hover:text-primary text-neutral-500 transition-colors"
          to={`/${second}`}
        >
          {second}{" "}
        </Link>
      ) : (
        <span className="text-primary font-medium">{second}</span>
      )}
      {third && <span className="text-primary font-medium">/ {third}</span>}
    </p>
  );
};

export default Breadcrumb;
