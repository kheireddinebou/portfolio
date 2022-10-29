import React, { useState } from "react";
import "./skills.scss";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BsServer } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";

import { BsPatchCheckFill } from "react-icons/bs";

function Skills() {
  const [showFrontSkills, setShowFrontSkills] = useState(true);
  const [showBackSkills, setShowBackSkills] = useState(true);
  const [showEduc, setShowEduc] = useState(true);

  const frontSkills = [
    "HTML",
    "CSS",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Bootstrap",
    "Material-UI",
    "Sass",
    "styled-components",
    "Git & GitHub",
    "Jest",
  ];

  const backSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "RESTful APIs",
    "Firebase",
  ];

  return (
    <div id="skills" className="skills container">
      <h2 className="sec-title">Skills & Education</h2>
      <span className="sec-subTitle">My technical level</span>

      <div className="cards-wrapper">
        <div className="card">
          <div className="top">
            <div className="row">
              <MdMonitor className="icon" />
              <p>Frontend Development</p>
            </div>

            <button
              onClick={() => setShowFrontSkills(!showFrontSkills)}
              className={`${showFrontSkills && "rotate"}`}
            >
              <RiArrowDownSLine />
            </button>
          </div>
          {showFrontSkills && (
            <div className="skills-bottom">
              {frontSkills.map((skill, index) => (
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
              <BsServer className="icon" />
              <p>Backend Development</p>
            </div>

            <button
              onClick={() => setShowBackSkills(!showBackSkills)}
              className={`${showBackSkills && "rotate"}`}
            >
              <RiArrowDownSLine />
            </button>
          </div>
          {showBackSkills && (
            <div className="skills-bottom">
              {backSkills.map((skill, index) => (
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
                <p className="license">Bachelor of Science and Technology</p>
                <span className="university">
                  University of Ahmed Zabana - Relizene
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
