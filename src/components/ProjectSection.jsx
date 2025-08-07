import React from "react";
import styles from "./ProjectSection.module.css";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Revo",
      subtitle: "Plantilla de marco gratuita",
      thumb: "/imagenes/proj-revo.png",
      href: "#"
    },
    {
      id: 2,
      title: "NajmAI",
      subtitle: "Plantilla de marco SaaS",
      thumb: "/imagenes/proj-najmai.png",
      href: "#"
    },
    {
      id: 3,
      title: "Nashra",
      subtitle: "Plantilla de marco SaaS",
      thumb: "/imagenes/proj-nashra.png",
      href: "#"
    },
    {
      id: 4,
      title: "Nashra",
      subtitle: "Plantilla de marco SaaS",
      thumb: "/imagenes/proj-nashra.png",
      href: "#"
    }
  ];

  return (
    <section className={styles.wrap}>
      <h2 className={styles.title}>
        <span className={styles.gray}>PROYECTOS</span> <br /> RECIENTES
      </h2>

      <div className={styles.list}>
        {projects.map(p => (
          <a className={styles.item} href={p.href} key={p.id}>
            <div className={styles.thumb}>
              <img src="/imagenes/test.avif" alt={p.title} loading="lazy" />
            </div>
            <div className={styles.info}>
              <h3>{p.title}</h3>
              <p>{p.subtitle}</p>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
