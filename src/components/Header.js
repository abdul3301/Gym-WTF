import React from "react";
import "./Header.css";
import wtf from "../assets/wtf_logo.png";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header">
        <div className="header-img">
          <img src={wtf} alt="wtf" />
        </div>
        <div className="header-tabs">
          <p>Fitness</p>

          <p>Nutrition</p>

          <p>Gyms</p>

          <p>Become WTF Partner</p>

          <p>About Us</p>

          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
