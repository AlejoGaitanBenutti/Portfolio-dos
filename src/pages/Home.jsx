import React from "react";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import IntroSection from "../components/IntroSection";
import ProjectSection from "../components/ProjectSection"; // <- solo lista, sin card
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <NavBar />

      {/* Layout 2 columnas: izquierda sticky, derecha scrollea */}
      <main className={styles.page}>
        <aside className={styles.sidebar}>
          <div className={styles.sticky}>
            <ProfileCard />
          </div>
        </aside>

        <section className={styles.content}>
          {/* SECCIONES que scrollean */}
          <section id="home">
            <IntroSection />
          </section>

          <section id="projects">
            <ProjectSection />
          </section>

          {/* Aquí puedes seguir sumando secciones… */}
          {/* <section id="experience"><ExperienceSection /></section> */}
          {/* <section id="contact"><ContactSection /></section> */}
        </section>
      </main>
    </>
  );
};

export default Home;
