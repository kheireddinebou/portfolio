import { myProjects } from "../../data/projects";
import IsInViewPort from "../ui/IsInViewPort";
import ProjectCard from "../ui/projectCard/ProjectCard";
import "./portfolio.scss";

function Portfolio() {
  return (
    <IsInViewPort
      threshold={0.05}
      id="portfolio"
      className="portfolio container"
    >
      <h2 className="sec-title">Portfolio</h2>
      <span className="sec-subTitle">Most recent work</span>
      <div className="card-wrapper">
        {myProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </IsInViewPort>
  );
}

export default Portfolio;
