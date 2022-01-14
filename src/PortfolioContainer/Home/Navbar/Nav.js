import React from "react";
import "./Nav.css";

function Nav(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-left">
          <div className="navbar-left-logo">
            <img
              src={require("../../../assets/Home/portfolio.png")}
              alt="logo"
            />
          </div>
          <ul>
            <ul className="navbar-right">
              <li>
                <a href="" />
                Home
              </li>
              <li>
                <a href="" />
                About
              </li>
              <li>
                <a href="" />
                Skills
              </li>
              <li>
                <a href="" />
                Resume
              </li>
              <li>
                <a href="" />
                Contact
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
