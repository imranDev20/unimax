import { Link } from "gatsby";
import React from "react";

export const LinkButton = ({ to, children }) => {
  return (
    <Link
      className="bg-secondary text-white px-7 py-3 inline-block mt-3 rounded text-lg hover:bg-primary transition-colors"
      to={to}
    >
      {children}
    </Link>
  );
};

export const NormalButton = ({
  to,
  children,
  className,
  modalOpen,
  setModalOpen,
  open,
  close,
}) => {
  return (
    <button
      onClick={() => (modalOpen ? close() : open())}
      className={`rounded bg-secondary text-white transition-colors hover:bg-primary ${className}`}
    >
      {children}
    </button>
  );
};
