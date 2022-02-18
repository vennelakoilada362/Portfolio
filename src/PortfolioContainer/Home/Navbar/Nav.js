import React from "react";
import "./Nav.css";

function Nav(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <ul className="navbar-left">
            <div className="navbar-left-logo">
              <img
                src={require("../../../assets/Home/portfolio.png")}
                alt="logo"
              />
            </div>
          </ul>
          <ul className="navbar-right">
            <h5 className="home">
              <a href="./PortfolioContainer/Home/Home">Home</a>
            </h5>
            <h5 className="about">
              <a href="./PortfolioContainer/About/About">About</a>
            </h5>
            <h5 className="skills">
              <a href="./PortfolioContainer/Skills/Skills">Skills</a>
            </h5>
            <h5 className="resume">
              <a href="./PortfolioContainer/Resume/Resume">Resume</a>
            </h5>
            <h5 className="contact">
              <a href="./PortfolioContainer/Contact/Contact">Contact</a>
            </h5>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
