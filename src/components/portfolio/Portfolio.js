import React from "react";
import "./portfolio.scss";
import crypto from "../../images/portfolio/crypto.jpg";
import weather from "../../images/portfolio/weather.jpg";
import talkilly from "../../images/portfolio/talkilly.jpg";
import creativeMinds from "../../images/portfolio/creative-minds.jpg";
import quiz from "../../images/portfolio/quiz.jpg";
import khirouShop from "../../images/portfolio/khirou-shop.jpg";
import myCar from "../../images/portfolio/my-car.jpg";
import { BsArrowRightShort } from "react-icons/bs";
function Portfolio() {
  const myWorks = [
    {
      img: myCar,
      title:
        "Modern Website For Buy and sell used and new cars using React.js, Node.js, JWT, MongoDB, Cloudinary and Sass",
      githubLink: "https://github.com/khiereddinbou/my-car",
      demoLink: "https://my-car-khiereddinbou.vercel.app/",
    },
    {
      img: creativeMinds,
      title:
        "Responsive Social Media Website With Theme Customization using Next.js and Firebase",
      githubLink: "https://github.com/khiereddinbou/creative-minds",
      demoLink: "https://creative-minds-khirou.vercel.app/",
    },
    {
      img: talkilly,
      title:
        "Realtime Private Chat Mobile Application with React Native and Firebase ",
      githubLink: "https://github.com/khiereddinbou/talkilly",
      demoLink: "https://expo.dev/@kheiereddin/talkilly",
    },

    {
      img: khirouShop,
      title:
        "Full E-commerce Website With Admin Panel using React.js, Node.js, Stripe, JWT, MongoDB and styled-components",
      githubLink: "https://github.com/khiereddinbou/khirou-shop",
      demoLink: "https://khirou-shop.vercel.app/",
    },

    {
      img: weather,
      title:
        "Weather app with daily and hourly forcast using react, api, Bootstrap",
      githubLink: "https://github.com/khiereddinbou/weather",
      demoLink: "https://khiereddinbou.github.io/weather/",
    },

    {
      img: quiz,
      title: "Quiz app using TypeScript, Sass and The Trivia API ",
      githubLink: "https://github.com/khiereddinbou/quiz-app",
      demoLink: "https://khiereddinbou.github.io/quiz-app/",
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
    //   img: expense,
    //   title:
    //     "Expense Tracker Using React, Chart.js, RESTful APIs and Bootstrap",
    //   githubLink: "https://github.com/khiereddinbou/expense-tracker",
    //   demoLink: "https://expense-tracker-khirou.vercel.app/",
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
