import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      {" "}
      {showTopBtn && (
        <BsArrowUp
          className="fixed bottom-40 right-8 z-50 bg-white shadow-custom rounded-lg h-10 w-10 p-2 text-secondary animate-bounce cursor-pointer "
          onClick={goToTop}
        />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
