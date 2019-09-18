import React from "react";
import "../assets/css/header.css";

const Header = ({ topScore, currentScore, message }) => {
  return (
    <header>
      <div className="brand">Click Bait</div>
      <div className="message">{message}</div>
      <div className="scores">
        Score:&emsp; {currentScore} &emsp; | &emsp;Top Score:&emsp; {topScore}
      </div>
    </header>
  );
};

export default Header;
