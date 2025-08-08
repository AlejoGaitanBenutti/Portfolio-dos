import React from "react";
import styles from "./ProjectSection.module.css";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "TrustAdmin",
      subtitle: "Dashboard Administrativo",
      thumb: "/imagenes/bandidos.PNG",
      href: "#"
    },
    {
      id: 2,
      title: "Reliable",
      subtitle: "Landing - Ecommerce",
      thumb: "/imagenes/bandidos.PNG",
      href: "#"
    },
    {
      id: 3,
      title: "Bandidos Barbershop",
      subtitle: "Landing-Ecommerce ",
      thumb: "/imagenes/bandidos.PNG",
      href: "#"
    },
    {
      id: 4,
      title: "Nashra",
      subtitle: "Plantilla de marco SaaS",
      thumb: "/imagenes/bandidos.PNG",
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
              <img src="/imagenes/bandidos-test.PNG" alt={p.title} loading="lazy" />
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
