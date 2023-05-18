import "./skills.scss";
import { FaUniversity } from "react-icons/fa";
import { BsServer } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";
import SkillCard from "../skillCard/SkillCard";
import { backEndSkills, frontEndSkills } from "../../data/skills";
import IsInViewPort from "../ui/IsInViewPort";

function Skills() {
  return (
    <IsInViewPort threshold={0.3} id="skills" className="skills container">
      <h2 className="sec-title">Skills & Education</h2>
      <span className="sec-subTitle">My technical level</span>

      <div className="cards-wrapper">
        <SkillCard
          title="Frontend Development"
          skills={frontEndSkills}
          Icon={<MdMonitor className="icon" />}
        />
        <SkillCard
          title="Backend Development"
          skills={backEndSkills}
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
