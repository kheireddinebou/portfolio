import React from "react";
import "./portfolio.scss";
import budget from "../../images/portfolio/budget.jpg";
import adminDashboard from "../../images/portfolio/adminDashboard.jpg";
import crypto from "../../images/portfolio/crypto.jpg";
import quiz from "../../images/portfolio/quiz.jpg";
import recipes from "../../images/portfolio/recipes.jpg";
import weather from "../../images/portfolio/weather.jpg";
import { BsArrowRightShort } from "react-icons/bs";

function Portfolio() {
  const myWorks = [
    {
      img: weather,
      title: "Weather app with daily and hourly forcast using Bootstrap",
      githubLink: "https://github.com/khiereddinbou/weather",
      demoLink: "https://khiereddinbou.github.io/weather/",
    },
    {
      img: adminDashboard,
      title: "Modern admin dashboard with light an dark mode using Material-UI",
      githubLink: "https://github.com/khiereddinbou/admin-dashboard",
      demoLink: "https://khiereddinbou.github.io/admin-dashboard",
    },
    {
      img: quiz,
      title: "Quiz app using TypeScript and Sass",
      githubLink: "https://github.com/khiereddinbou/quiz-app",
      demoLink: "https://khiereddinbou.github.io/quiz-app/",
    },
    {
      img: recipes,
      title: "Cooking app with categories and international cuisines using css",
      githubLink: "https://github.com/khiereddinbou/recipes",
      demoLink: "https://khiereddinbou.github.io/recipes",
    },
    {
      img: crypto,
      title: "Crypto currency tracker using react-chartjs-2 and Material-UI",
      githubLink: "https://github.com/khiereddinbou/cryptocurrency-tracker",
      demoLink: "https://khiereddinbou.github.io/cryptocurrency-tracker",
    },
    {
      img: budget,
      title: "Budget planner with notications using Bootstrap",
      githubLink: "https://github.com/khiereddinbou/budget-planer",
      demoLink: "https://khiereddinbou.github.io/budget-planer",
    },
  ];
  return (
    <div id="portfolio" className="portfolio container">
      <h2 className="sec-title">Portfolio</h2>
      <span className="sec-subTitle">Most recent work</span>
      <div className="card-wrapper">
        {myWorks.map((work, index) => (
          <div key={index} className="card">
            <img loading="lazy" src={work.img} alt={work.title} />
            <p>{work.title}</p>
            <div className="links">
              <a target="_blank" href={work.githubLink}>
                Github
              </a>
              <a target="_blank" href={work.demoLink}>
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
