import React from "react";
import "../styles/about.css";

function AboutSkills() {
  return (
    <div className="skills">
      <p className="skills__block">
        {" "}
        <span className="skills__block-item">HTML5</span>
        <span className="skills__block-item">CSS3</span>
        <span className="skills__block-item">Bootstrap</span>
      </p>
      <p className="skills__block block">
        <span className="skills__block-item">JavaScript</span>
        <span className="skills__block-item">Vue</span>
        <span className="skills__block-item">React</span>
        <span className="skills__block-item">React-router</span>
        <span className="skills__block-item">Redux</span>
      </p>

      <p className="skills__block">
        <span className="skills__block-item">Photoshop</span>
        <span className="skills__block-item">Figma</span>
      </p>

      <p className="skills__block">
        <span className="skills__block-item">Node (basic)</span>
      </p>
      <p className="skills__block">
        <span className="skills__block-item">Webpack</span>
      </p>

      <p className="skills__block">
        <span className="skills__block-item">Git</span>
      </p>
      <p className="skills__block"></p>

      <span className="skills__block-item"></span>
    </div>
  );
}

export default AboutSkills;
