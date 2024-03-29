import React, { useEffect, useState } from "react";
import "./header.scss";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { motion } from "framer-motion";
import IsInViewPort from "../ui/IsInViewPort";

function Header() {
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener(("scroll", handleScroll));
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <IsInViewPort threshold={0.7} id="header" className="header container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", duration: 3 }}
          className="header_wrapper"
        >
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

            <a className="scrollDown-link" href="#contact">
              <div className="circle"></div>
            </a>
          </div>

          <div className="header-desc">
            <p>Hello, I'm</p>
            <h1>Kheireddine</h1>
            <span>Front End Developer (React/ Next.js)</span>
            <div className="buttons">
              <button className="outlineButton">
                <a
                  href="https://kheireddine.vercel.app//resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </a>
              </button>
              <button className="primaryButton">
                <a href="#contact">Let's Talk</a>
              </button>
            </div>
          </div>
        </motion.div>
      </IsInViewPort>

      <button
        style={{
          bottom: !scrollToTop ? "-100%" : "5.5rem",
        }}
        className="primaryButton scrollTopBtn"
        onClick={handleScrollToTop}
      >
        <MdKeyboardArrowUp />
      </button>
    </>
  );
}

export default Header;
