import React from "react";
import "./Logo.css";
import amazonepng from '../../../Assets/amazonpng.png';

function Logo() {
  return (
    <div className="amazone-logo">
      <a href="https://www.amazon.in/ref=nav_logo">
        <img src={amazonepng} alt="amazone logo" />
      </a>
    </div>
  );
}

export default Logo;
