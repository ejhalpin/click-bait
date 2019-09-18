import React from "react";
import logo from "../assets/img/logo.png";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="brand small">Click Bait</div>
      <img src={logo} className="icon" alt="react logo" />
    </footer>
  );
};

export default Footer;
