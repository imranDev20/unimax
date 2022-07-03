import { Link } from "gatsby";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  // const routes = [
  //   { id: 1, label: "Home", link: "/" },
  //   { id: 2, label: "About", link: "/about" },
  //   { id: 3, label: "Team", link: "/team" },
  //   { id: 4, label: "Services", link: "/services" },
  //   { id: 5, label: "Pricing", link: "/pricing" },
  //   { id: 6, label: "Contact", link: "/contact" },
  //   { id: 7, label: "Blog", link: "/blog" },
  // ];
  const [isHoverAbout, toggleHoverAbout] = useState(false);
  const toggleHoverMenuAbout = () => {
    toggleHoverAbout(!isHoverAbout);
  };

  const [isHoverServices, toggleHoverServices] = useState(false);
  const toggleHoverMenuServices = () => {
    toggleHoverServices(!isHoverServices);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
      position: "absolute",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
        delay: 0.0,
      },
      transitionEnd: {
        position: "absolute",
        display: "none",
      },
    },
  };
  return (
    <nav className="mr-10">
      <div className="flex items-center">
        <Link
          className="py-5 px-5 inline-block text-primary hover:text-secondary font-medium transition text"
          to="/"
          activeClassName="text-secondary"
        >
          Home
        </Link>
        <motion.div
          onHoverStart={toggleHoverMenuAbout}
          onHoverEnd={toggleHoverMenuAbout}
        >
          <Link
            className="py-5 px-5 inline-block text-primary hover:text-secondary font-medium transition text"
            to="/about"
            activeClassName="text-secondary"
          >
            About
          </Link>
          <motion.div
            initial="exit"
            animate={isHoverAbout ? "enter" : "exit"}
            variants={subMenuAnimate}
          >
            <div className="shadow-lg bg-white rounded-md p-5 min-w-[180px]">
              <Link
                className="block pb-3 text-primary hover:text-secondary font-medium transition text"
                to="/team"
                activeClassName="text-secondary"
              >
                Team
              </Link>
              <Link
                className="block pb-3 text-primary hover:text-secondary font-medium transition text"
                to="/team"
                activeClassName="text-secondary"
              >
                Message From CEO
              </Link>
              <Link
                className="block pb-3 text-primary hover:text-secondary font-medium transition text"
                to="/team"
                activeClassName="text-secondary"
              >
                Company Profile
              </Link>
              <Link
                className="block  text-primary hover:text-secondary font-medium transition text"
                to="/team"
                activeClassName="text-secondary"
              >
                Payment Process
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          onHoverStart={toggleHoverMenuServices}
          onHoverEnd={toggleHoverMenuServices}
        >
          <Link
            className="py-5 px-5 inline-block text-primary hover:text-secondary font-medium transition text"
            to="/services"
            activeClassName="text-secondary"
          >
            Services
          </Link>
          <motion.div
            initial="exit"
            animate={isHoverServices ? "enter" : "exit"}
            variants={subMenuAnimate}
          >
            <div className="shadow-lg bg-white rounded-md p-5 min-w-[180px]">
              <Link
                className="block pb-3 text-primary hover:text-secondary font-medium transition text"
                to="/team"
                activeClassName="text-secondary"
              >
                Web Development
              </Link>
              <Link
                className="block pb-3 text-primary hover:text-secondary font-medium transition text"
                to="/team"
              >
                Graphic Design
              </Link>
              <Link
                className="block pb-3 text-primary hover:text-secondary font-medium transition text"
                to="/team"
              >
                Digital Marketing
              </Link>
              <Link
                className="block pb-3 text-primary hover:text-secondary font-medium transition text"
                to="/team"
              >
                SEO
              </Link>
              <Link
                className="block pb-3 text-primary hover:text-secondary font-medium transition text"
                to="/team"
              >
                Content Writing
              </Link>
              <Link
                className="block text-primary hover:text-secondary font-medium transition text"
                to="/team"
              >
                Mobile App
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <Link
          className="py-5 px-5 inline-block text-primary hover:text-secondary font-medium transition text"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="py-5 px-5 inline-block text-primary hover:text-secondary font-medium transition text"
          to="/blog"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
