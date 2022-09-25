import React, { useState } from "react";
import "./skills.scss";
import { RiBracesFill, RiArrowDownSLine } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BsPatchCheckFill } from "react-icons/bs";

function Skills() {
  const [showSkills, setShowSkills] = useState(true);
  const [showEduc, setShowEduc] = useState(true);

  const mySkills = [
    "HTML",
    "CSS",
    "TypeScript",
    "JavaScript",
    "React",
    "Git & GitHub",
    'Jest',
    "Bootstrap",
    "Material-UI",
    "Sass",
    "styled-components",
  ];

  return (
    <div id="skills" className="skills container">
      <h2 className="sec-title">Skills & Education</h2>
      <span className="sec-subTitle">My technical level</span>

      <div className="cards-wrapper">
        <div className="card">
          <div className="top">
            <div className="row">
              <RiBracesFill className="icon" />
              <p>Frontend Developer</p>
            </div>

            <button
              onClick={() => setShowSkills(!showSkills)}
              className={`${showSkills && "rotate"}`}
            >
              <RiArrowDownSLine />
            </button>
          </div>
          {showSkills && (
            <div className="skills-bottom">
              {mySkills.map((skill, index) => (
                <div key={index} className="row">
                  <BsPatchCheckFill className="icon" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card">
          <div className="top">
            <div className="row">
              <GiGraduateCap className="icon" />
              <p>Education</p>
            </div>

            <button
              onClick={() => setShowEduc(!showEduc)}
              className={`${showEduc && "rotate"}`}
            >
              <RiArrowDownSLine />
            </button>
          </div>

          {showEduc && (
            <div className="educ-bottom">
              <FaUniversity className="icon" />

              <div className="desc">
                <p className="license">B.A Science and Technologies</p>
                <span className="university">
                  University of Ahmed Zabana - Relizene
                </span>
                <span>Sept 2021 – June 2024</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
