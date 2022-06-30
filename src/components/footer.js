import { Link } from "gatsby";
import React from "react";
import Logo from "./logo";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="container mx-auto px-10 mt-48">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 ">
        <div>
          <Logo />
          <p className="mt-5 text-primary leading-7">
            Provide a full range of IT Services and Solutions to businesses and
            industry leaders, both large and small.
          </p>
          <div className="flex mt-5">
            <a
              target="_blank"
              href="https://facebook.com"
              className="w-10 h-10 border rounded flex justify-center items-center mr-4 hover:bg-secondary hover:text-white transition"
              rel="noreferrer"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              target="_blank"
              href="https://facebook.com"
              className="w-10 h-10 border rounded flex justify-center items-center mr-4 hover:bg-secondary hover:text-white transition"
              rel="noreferrer"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              target="_blank"
              href="https://facebook.com"
              className="w-10 h-10 border rounded flex justify-center items-center mr-4 hover:bg-secondary hover:text-white transition"
              rel="noreferrer"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-primary font-semibold text-2xl mb-7">
            IT Services
          </h3>
          <Link
            to="/web-development"
            className="text-primary hover:text-secondary transition mb-3 block"
          >
            Web Development
          </Link>
          <Link
            to="/web-development"
            className="text-primary hover:text-secondary transition mb-3 block"
          >
            Graphics Design
          </Link>
          <Link
            to="/web-development"
            className="text-primary hover:text-secondary transition mb-3 block"
          >
            Digital Marketing
          </Link>
          <Link
            to="/web-development"
            className="text-primary hover:text-secondary transition mb-3 block"
          >
            Search Engine Optimization
          </Link>
          <Link
            to="/web-development"
            className="text-primary hover:text-secondary transition mb-3 block"
          >
            Content Writing
          </Link>
        </div>
        <div>
          <h3 className="text-primary font-semibold text-2xl mb-7">
            Quick Links
          </h3>
          <Link
            to="/web-development"
            className="text-primary hover:text-secondary transition mb-3 block"
          >
            Services
          </Link>
          <Link
            to="/web-development"
            className="text-primary hover:text-secondary transition mb-3 block"
          >
            Team
          </Link>
          <Link
            to="/web-development"
            className="text-primary hover:text-secondary transition mb-3 block"
          >
            About Unimax
          </Link>
          <Link
            to="/web-development"
            className="text-primary hover:text-secondary transition mb-3 block"
          >
            Contact Us
          </Link>
          <Link
            to="/web-development"
            className="text-primary hover:text-secondary transition mb-3 block"
          >
            Privacy Policy
          </Link>
        </div>
        <div>
          <h3 className="text-primary font-semibold text-2xl mb-7">
            Get in Touch
          </h3>

          <div className="text-primary leading-7 flex items-start">
            <div className="mt-1 mr-3">
              <FaMapMarkerAlt className="text-secondary text-xl" />
            </div>
            Al Hajj Khadem Complex, BM. College Road, Barishal 8200 Bangladesh
          </div>

          <div className="text-primary leading-7 flex items-start mt-3">
            <div className="mt-1 mr-3">
              <FaPhoneAlt className="text-secondary text-xl" />
            </div>
            <a
              className="text-primary hover:text-secondary transition"
              href="tel:+8801797902116"
            >
              +880 1797 902 116
            </a>
          </div>

          <div className="text-primary leading-7 flex items-start mt-3">
            <div className="mt-1 mr-3">
              <IoLogoWhatsapp className="text-secondary text-xl" />
            </div>
            <a
              className="text-primary hover:text-secondary transition"
              href="https://wa.me/8801797902116"
            >
              +880 1797 902 116
            </a>
          </div>

          <div className="text-primary leading-7 flex items-start mt-3">
            <div className="mt-1 mr-3">
              <FaEnvelope className="text-secondary text-xl" />
            </div>
            <a
              className="text-primary hover:text-secondary transition"
              href="mailto:contact@unimaxglobal.net"
            >
              contact@unimaxglobal.net
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-16" />

      <p className="text-center text-primary mt-7 mb-2">
        © {today.getFullYear()}{" "}
        <Link to="/" className="text-secondary">
          Unimax Global
        </Link>
        . All Rights Reserved
      </p>
      <p className="text-sm text-center mb-7 text-primary">
        Designed & Developed by{" "}
        <a
          className="text-secondary"
          target="_blank"
          href="https://imrankabir.netlify.app"
        >
          Imran Kabir
        </a>
      </p>
    </footer>
  );
};

export default Footer;
