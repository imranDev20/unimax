import { Link } from "gatsby";
import React from "react";

const Nav = () => {
  const routes = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Services", link: "/services" },
    { id: 4, label: "Contact", link: "/contact" },
    { id: 5, label: "Blog", link: "/blog" },
  ];
  return (
    <nav className="">
      {routes.map((route) => (
        <Link
          className="py-5 px-5 inline-block text-primary hover:text-secondary font-medium transition text"
          key={route.id}
          to={route.link}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
