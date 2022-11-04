import React, { useState } from "react";
import "./about.scss";

function About() {
  return (
    <div id="about" className="about container">
      <h2 className="sec-title">About Me</h2>
      <span className="sec-subTitle">My introduction</span>

      <div className="desc">
        <p>
          I'm Front End web developer (MERN Stack), specialize in website using
          React.js, I have experience in developing responsive web applications,
          using different technologies and libraries.
          <br /> I am a person who respects appointments and gives importance to
          time, I Like to share experiences with others, and also loves to learn
          something new every single day.
          <br />I have a passion for technology and i love to work in groups to
          get the best possible results.
        </p>
        <a href="#contact">Let's talk</a>
      </div>
    </div>
  );
}

export default About;
