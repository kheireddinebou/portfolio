import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveSec } from "../../redux/activeSecSlice";
import "./skills.scss";
import { FaUniversity } from "react-icons/fa";
import { BsServer } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";
import SkillCard from "../skillCard/SkillCard";

function Skills() {
  const ref = useRef();
  const dispatch = useDispatch();

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        dispatch(setActiveSec(entry.target.id));
      }
    },
    { threshold: 0.3 }
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  const frontSkills = [
    "HTML",
    "CSS",
    "TypeScript",
    "JavaScript",
    "React",
    "React Native",
    "Redux",
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
    <div ref={ref} id="skills" className="skills container">
      <h2 className="sec-title">Skills & Education</h2>
      <span className="sec-subTitle">My technical level</span>

      <div className="cards-wrapper">
        <SkillCard
          title="Frontend Development"
          skills={frontSkills}
          Icon={<MdMonitor className="icon" />}
        />
        <SkillCard
          title="Backend Development"
          skills={backSkills}
          Icon={<BsServer className="icon" />}
        />
        <SkillCard
          title="Education"
          skills={null}
          Icon={<FaUniversity className="icon" />}
        />
      </div>
    </div>
  );
}

export default Skills;
