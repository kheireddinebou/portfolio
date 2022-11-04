import React, { useEffect, useState } from "react";
import "./header.scss";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import CV from "../../files/kheiereddin-boukhatem.pdf";
import { motion } from "framer-motion";

function Header() {
  const [scrollToTop, setscrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setscrollToTop(true);
    } else {
      setscrollToTop(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div id="home" className="header container">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ type: 'spring', duration: 3 }}
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
            <h1>kheiereddin</h1>
            <span>front end web developer</span>
            <div className="buttons">
              <button>
                <a href={CV} download>
                  Download CV
                </a>
              </button>
              <button>
                <a href="#contact">Let's Talk</a>
              </button>
            </div>
          </div>
        </motion.div>

        
      </div>

      <button
        style={{
          display: !scrollToTop && "none",
        }}
        className="scrollTopBtn"
        onClick={handleScrollToTop}
      >
        <BiUpArrowAlt />
      </button>
    </>
  );
}

export default Header;
