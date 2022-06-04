import React from "react";
import Logo from "./logo";
import Nav from "./nav";

const Header = () => {
  return (
    <header className="container px-10 mx-auto flex items-center justify-between">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
