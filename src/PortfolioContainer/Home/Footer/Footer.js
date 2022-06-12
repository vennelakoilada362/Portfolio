import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/shape-bg.png")}
          alt="No internet connection"
        />
      </div>
    </div>
  );
}

export default Footer;
