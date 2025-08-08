import React from "react";
import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import IntroSection from "../components/IntroSection";
import ProjectSection from "../components/ProjectSection"; // <- solo lista, sin card
import styles from "../styles/Home.module.css";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />

      <main className={styles.page}>
        <aside className={styles.sidebar}>
          <div className={styles.sticky}>
            <ProfileCard />
          </div>
        </aside>

        <section className={styles.content}>
          <section id="home">
            <IntroSection />
          </section>

          <section id="projects">
            <ProjectSection />
          </section>

          <section id="tools">
            <Tools />
          </section>

          {/* Contacto dentro de la columna derecha → forzamos stack */}
          <section id="contact">
            <Contact stack />
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
