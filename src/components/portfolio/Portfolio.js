import React from "react";
import "./portfolio.scss";
import crypto from "../../images/portfolio/crypto.jpg";
import weather from "../../images/portfolio/weather.jpg";
import khirouChat from "../../images/portfolio/khirou-chat.jpg";
import creativeMinds from "../../images/portfolio/creative-minds.jpg";
import expense from "../../images/portfolio/expense-tracker.jpg";
import pizzaOredering from "../../images/portfolio/pizza-ordering.jpg";
import khirouShop from "../../images/portfolio/khirou-shop.jpg";
import { BsArrowRightShort } from "react-icons/bs";
// import budget from "../../images/portfolio/budget.jpg";
// import adminDashboard from "../../images/portfolio/adminDashboard.jpg";
// import quiz from "../../images/portfolio/quiz.jpg";
// import recipes from "../../images/portfolio/recipes.jpg";

function Portfolio() {
  const myWorks = [
    {
      img: creativeMinds,
      title:
        "Responsive Social Media Website With Theme Customization using Next.js and Firebase",
      githubLink: "https://github.com/khiereddinbou/creative-minds",
      demoLink: "https://creative-minds-khirou.vercel.app/",
    },
    {
      img: khirouChat,
      title: "Realtime Private Chat Application with React, Firebase and Sass",
      githubLink: "https://github.com/khiereddinbou/chat-app",
      demoLink: "https://khirou-chat.onrender.com",
    },

    {
      img: khirouShop,
      title:
        "Full E-commerce Website With Admin Panel using React.js, Node.js, Stripe, JWT, MongoDB and styled-components",
      githubLink: "https://github.com/khiereddinbou/khirou-shop",
      demoLink: "https://khirou-shop.onrender.com",
    },
    {
      img: expense,
      title:
        "Expense Tracker Using React, Chart.js, RESTful APIs and Bootstrap",
      githubLink: "https://github.com/khiereddinbou/expense-tracker",
      demoLink: "https://expense-tracker-khirou.onrender.com/",
    },
    {
      img: weather,
      title:
        "Weather app with daily and hourly forcast using react, api, Bootstrap",
      githubLink: "https://github.com/khiereddinbou/weather",
      demoLink: "https://khiereddinbou.github.io/weather/",
    },

    {
      img: crypto,
      title:
        "Crypto currency tracker using react, api, react-chartjs-2 and Material-UI",
      githubLink: "https://github.com/khiereddinbou/cryptocurrency-tracker",
      demoLink: "https://khiereddinbou.github.io/cryptocurrency-tracker",
    },
    // {
    //   img: pizzaOredering,
    //   title:
    //     "Pizza Ordering Website With Admin Panel using Next.js, Node.js, MongoDB and Bootstrap",
    //   githubLink: "https://github.com/khiereddinbou/pizza-ordering",
    //   demoLink: "https://pizza-ordering.vercel.app/",
    // },

    // {
    //   img: budget,
    //   title: "Budget planner with notications using Bootstrap",
    //   githubLink: "https://github.com/khiereddinbou/budget-planer",
    //   demoLink: "https://khiereddinbou.github.io/budget-planer",
    // },
    // {
    //   img: adminDashboard,
    //   title: "Modern admin dashboard with light and dark mode using Material-UI",
    //   githubLink: "https://github.com/khiereddinbou/admin-dashboard",
    //   demoLink: "https://khiereddinbou.github.io/admin-dashboard",
    // },
    // {
    //   img: quiz,
    //   title: "Quiz app using TypeScript and Sass",
    //   githubLink: "https://github.com/khiereddinbou/quiz-app",
    //   demoLink: "https://khiereddinbou.github.io/quiz-app/",
    // },
    // {
    //   img: recipes,
    //   title: "Cooking app with categories and international cuisines using css",
    //   githubLink: "https://github.com/khiereddinbou/recipes",
    //   demoLink: "https://khiereddinbou.github.io/recipes",
    // },
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
