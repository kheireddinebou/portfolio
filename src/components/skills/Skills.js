import "./skills.scss";
import { FaUniversity } from "react-icons/fa";
import { BsServer } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";
import SkillCard from "../skillCard/SkillCard";
import { backSkills, frontSkills } from "../../data/skills";
import IsInViewPort from "../../utill/IsInViewPort";

function Skills() {
  return (
    <IsInViewPort threshold={0.3} id="skills" className="skills container">
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
    </IsInViewPort>
  );
}

export default Skills;
