import IsInViewPort from "../ui/IsInViewPort";
import "./about.scss";

function About() {
  return (
    <IsInViewPort threshold={0.7} id="about" className="about container">
      <h2 className="sec-title">About Me</h2>
      <span className="sec-subTitle">My introduction</span>

      <div className="desc">
        <p>
          As a skilled Front End Developer, I am proficient in the MERN Stack
          and specialize in creating visually appealing and user-friendly
          websites using React. I am also experienced in developing
          cross-platform mobile applications using React Native, ensuring that
          users have a seamless experience across all devices.
          <br className="mb-3"/> I have a strong commitment to meeting deadlines and valuing the
          importance of time. I believe that open communication and
          collaboration are key to achieving the best possible results.
          <br className="mb-3"/> I am constantly seeking out new challenges and opportunities to
          expand my knowledge and deliver high-quality results.
        </p>
        <button className="primaryButton">
          <a href="#contact">Let's talk</a>
        </button>
      </div>
    </IsInViewPort>
  );
}

export default About;
