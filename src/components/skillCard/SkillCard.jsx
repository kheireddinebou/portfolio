import React, { useEffect, useRef, useState } from "react";
import "./skillCard.scss";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";

function SkillCard({ title, skills, Icon }) {
  const [isVisisble, setIsVisisble] = useState(false);
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef();

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
    { threshold: 0.7 }
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setIsVisisble(isIntersecting);
  }, [isIntersecting]);

  return (
    <div ref={ref} className="card">
      <div className="top">
        <div className="row">
          {Icon}
          <p>{title}</p>
        </div>

        <button
          onClick={() => setIsVisisble(!isVisisble)}
          className={`${isVisisble && "rotate"}`}
        >
          <RiArrowDownSLine />
        </button>
      </div>
      {skills ? (
        <div className="skills-bottom" style={{ opacity: isVisisble ? 1 : 0 }}>
          {skills.map((skill, index) => (
            <div key={index} className="row">
              <BsPatchCheckFill className="icon" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ opacity: isVisisble ? 1 : 0 }} className="educ-bottom">
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
  );
}

export default SkillCard;
