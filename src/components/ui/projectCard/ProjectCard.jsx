import "./projectCard.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <img loading="lazy" src={project.img} alt={project.title} />
      <p>{project.title}</p>
      <div className="links">
        <button className="outlineButton">
          <a target="_blank" rel="noreferrer" href={project.githubLink}>
            Github
          </a>
        </button>
        <button className="primaryButton">
          <a target="_blank" rel="noreferrer" href={project.demoLink}>
            Demo
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
