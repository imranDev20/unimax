import { Link } from "gatsby";
import React from "react";

const Nav = () => {
  const routes = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Team", link: "/team" },
    { id: 4, label: "Services", link: "/services" },
    { id: 5, label: "Pricing", link: "/pricing" },
    { id: 6, label: "Contact", link: "/contact" },
    { id: 7, label: "Blog", link: "/blog" },
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
