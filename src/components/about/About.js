import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveSec } from "../../redux/activeSecSlice";
import "./about.scss";

function About() {
  const ref = useRef();
  const dispatch = useDispatch();

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        dispatch(setActiveSec(entry.target.id));
      }
    },
    { threshold: 0.7 }
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} id="about" className="about container">
      <h2 className="sec-title">About Me</h2>
      <span className="sec-subTitle">My introduction</span>

      <div className="desc">
        <p>
          As a skilled Front End Web Developer, I am proficient in the MERN
          Stack and specialize in creating visually appealing and user-friendly
          websites using React.js. I am also experienced in developing
          cross-platform mobile applications using React Native, ensuring that
          users have a seamless experience across all devices.
          <br /> I have a strong commitment to meeting deadlines and valuing the
          importance of time. I believe that open communication and
          collaboration are key to achieving the best possible results.
          <br /> I am constantly seeking out new challenges and opportunities to
          expand my knowledge and deliver high-quality results.
        </p>
        <a href="#contact">Let's talk</a>
      </div>
    </div>
  );
}

export default About;
