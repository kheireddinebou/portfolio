import { myProjects } from "../../data/projects";
import IsInViewPort from "../../utill/IsInViewPort";
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
        {myProjects.map((work, index) => (
          <div key={index} className="card">
            <img loading="lazy" src={work.img} alt={work.title} />
            <p>{work.title}</p>
            <div className="links">
              <a target="_blank" rel="noreferrer" href={work.githubLink}>
                Github
              </a>
              <a target="_blank" rel="noreferrer" href={work.demoLink}>
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </IsInViewPort>
  );
}

export default Portfolio;
