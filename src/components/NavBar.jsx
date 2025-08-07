import React from "react";
import { FaHome, FaFolder, FaBriefcase, FaWrench, FaPen } from "react-icons/fa";
import styles from "./NavBar.module.css";

const navItems = [
  { icon: <FaHome />, label: "Hogar", link: "#home" },
  { icon: <FaFolder />, label: "Proyectos", link: "#projects" },
  { icon: <FaBriefcase />, label: "Experiencia", link: "#experience" },
  { icon: <FaWrench />, label: "Herramientas", link: "#tools" },
  { icon: <FaPen />, label: "Contacto", link: "#contact" },
];

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      {navItems.map((item, index) => (
        <a key={index} href={item.link} className={styles.navItem}>
          {item.icon}
          <span className={styles.tooltip}>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}