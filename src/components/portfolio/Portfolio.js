import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { myProjects } from "../../data/porojects";
import { setActiveSec } from "../../redux/activeSecSlice";
import "./portfolio.scss";

function Portfolio() {
  const ref = useRef();
  const dispatch = useDispatch();

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        dispatch(setActiveSec(entry.target.id));
      }
    },
    { threshold: 0.05 }
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} id="portfolio" className="portfolio container">
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
    </div>
  );
}

export default Portfolio;
