import React, { useEffect, useState } from "react";
import "./header.scss";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import CV from "../../files/kheiereddin-boukhatem.pdf";
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
              href="https://www.linkedin.com/in/kheiereddin-boukhatem-801425240"
            >
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/khiereddinbou">
              <FaGithub />
            </a>
            <a target="_blank" href="https://www.facebook.com/kheier.eddin">
              <FaFacebook />
            </a>

            <a className="scrollDown-link" href="#contact">
              <div className="circle"></div>
            </a>
          </div>

          <div className="header-desc">
            <p>Hello, I'm</p>
            <h1>Kheiereddin</h1>
            <span>Front End Developer (React/ Next.js)</span>
            <div className="buttons">
              <button className="outlineButton">
                <a href={CV} download>
                  Download CV
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
