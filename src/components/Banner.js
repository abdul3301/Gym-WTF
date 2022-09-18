import React from "react";
import "./Banner.css";
import details from "../assets/details.PNG";

const Banner = () => {
  return (
    <div>
      <img className="bannerImg" src={details} alt="" />
    </div>
  );
};

export default Banner;
