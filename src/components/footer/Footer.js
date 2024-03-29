import React from "react";
import "./footer.scss";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <a href="#">
        <h3>KHIEREDDIN</h3>
      </a>
      <div className="row">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills & Education</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="links">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/kheireddine-boukhatem-801425240/"
        >
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/kheireddinebou">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.facebook.com/kheireddine.boukhatem.fb">
          <FaFacebook />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/kheireddineboukhatem1/"
        >
          <FaInstagram />
        </a>
      </div>

      <p>© KHEIREDDINE All rights reserved</p>
    </div>
  );
}

export default Footer;
