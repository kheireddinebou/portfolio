import React, { useContext, useEffect, useState } from "react";
import "./NavMenu.scss";
import { MdOutlineDarkMode } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { BsPerson, BsSun } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useTheme } from "../../theme";
import { motion } from "framer-motion";

function NavMenu() {
  const [active, setActive] = useState("#");

  const { theme, setTheme } = useTheme();

  //   const windowPath = window.location.href.split('/')[3]

  const handleActive = link => {
    setActive(link);
  };

  //   useEffect(() =>{
  //    setActive(windowPath)
  //   }, [windowPath]);

  return (
    <motion.div
      initial={{ bottom: -100 }}
      animate={{ bottom: 40 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
      }}
      className="navMenu"
    >
      <a
        onClick={() => handleActive("#")}
        className={active === "#" ? "active" : ""}
        href="#"
      >
        <BiHomeAlt />
      </a>
      <a
        onClick={() => handleActive("#about")}
        className={active === "#about" ? "active" : ""}
        href="#about"
      >
        <BsPerson />
      </a>
      <a
        onClick={() => handleActive("#skills")}
        className={active === "#skills" ? "active" : ""}
        href="#skills"
      >
        <FaLaptopCode />
      </a>
      <a
        onClick={() => handleActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
        href="#portfolio"
      >
        <HiOutlineDocumentText />
      </a>
      <a
        onClick={() => handleActive("#contact")}
        className={active === "#contact" ? "active" : ""}
        href="#contact"
      >
        <TbHeartHandshake />
      </a>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <MdOutlineDarkMode /> : <BsSun />}
      </button>
    </motion.div>
  );
}

export default NavMenu;
