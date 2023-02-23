import "./NavMenu.scss";
import { MdOutlineDarkMode } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { BsPerson, BsSun } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useTheme } from "../../theme";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function NavMenu() {
  const activeSec = useSelector(state => state.activeSec.activeSec);

  const { theme, setTheme } = useTheme();

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
      <a className={activeSec === "header" ? "active" : ""} href="#">
        <BiHomeAlt />
      </a>
      <a className={activeSec === "about" ? "active" : ""} href="#about">
        <BsPerson />
      </a>
      <a className={activeSec === "skills" ? "active" : ""} href="#skills">
        <FaLaptopCode />
      </a>
      <a
        className={activeSec === "portfolio" ? "active" : ""}
        href="#portfolio"
      >
        <HiOutlineDocumentText />
      </a>
      <a className={activeSec === "contact" ? "active" : ""} href="#contact">
        <TbHeartHandshake />
      </a>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <MdOutlineDarkMode /> : <BsSun />}
      </button>
    </motion.div>
  );
}

export default NavMenu;
