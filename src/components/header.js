import React from "react";
import "../assets/css/header.css";

const Header = () => {
  return (
    <header>
      <div className="brand">Click Bait</div>
      <div className="message">Welcome</div>
      <div className="scores">
        Score:&emsp; <span id="currentScore"> 0 </span>&emsp; | &emsp;Top Score:&emsp; <span id="topScore"> 0 </span>
      </div>
    </header>
  );
};

export default Header;
