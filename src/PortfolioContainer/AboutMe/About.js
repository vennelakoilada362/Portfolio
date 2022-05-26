import React from "react";
import "./About.css";

function About(props) {
  return (
    <div>
      <h1 className="intro">AboutMe</h1>

      <div className="a">
        <div className="a-left">
          <div className="a-card-bg">
            <div className="a-card">
              <img src={require("../../assets/Home/profile.jpg")} alt="logo" />
            </div>
          </div>
          <div className="a-right"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
