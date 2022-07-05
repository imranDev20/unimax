import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <motion.main
        initial={{
          opacity: 0,
          x: -200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 200,
        }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
        }}
      >
        {children}
      </motion.main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
