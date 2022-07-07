import { Link } from "gatsby";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const Nav = () => {
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
        duration: 0.2,
      },
      display: "block",
      position: "absolute",
    },
    exit: {
      opacity: 0,
      rotateX: -45,
      transition: {
        duration: 0.2,
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
            className="py-5 px-5 text-primary hover:text-secondary font-medium transition text flex items-center"
            to="/about"
            activeClassName="text-secondary"
          >
            About
            <FiChevronDown className="ml-1" />
          </Link>
          <motion.div
            initial="exit"
            animate={isHoverAbout ? "enter" : "exit"}
            variants={subMenuAnimate}
          >
            <div className="shadow-custom bg-white rounded-md p-5 min-w-[180px]">
              <Link
                className="block pb-3 text-primary hover:text-secondary font-medium transition text"
                to="/team"
                activeClassName="text-secondary"
              >
                Team
              </Link>
              <Link
                className="block text-primary hover:text-secondary font-medium transition text"
                to="/careers"
                activeClassName="text-secondary"
              >
                Careers
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          onHoverStart={toggleHoverMenuServices}
          onHoverEnd={toggleHoverMenuServices}
        >
          <Link
            className="py-5 px-5 text-primary hover:text-secondary font-medium transition text flex items-center"
            to="/services"
            activeClassName="text-secondary"
          >
            Services
            <FiChevronDown className="ml-1" />
          </Link>
          <motion.div
            initial="exit"
            animate={isHoverServices ? "enter" : "exit"}
            variants={subMenuAnimate}
          >
            <div className="shadow-custom bg-white rounded-md p-5 min-w-[180px]">
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
