import React from "react";
import UnimaxLogo from "../../images/unimax.svg";
import UnimaxLogoHor from "../../images/logo-unimax-hor.svg";

const Logo = ({ className, isHorizontal }) => {
  return (
    <div className="py-1">
      {!isHorizontal ? (
        <img className={`${className}`} src={UnimaxLogo} alt="" />
      ) : (
        <img className={`${className}`} src={UnimaxLogoHor} alt="" />
      )}
    </div>
  );
};

export default Logo;
