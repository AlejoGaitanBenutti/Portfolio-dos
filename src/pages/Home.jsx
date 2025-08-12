import React from "react";
import StickyBox from "react-sticky-box";
import useDesktop from "../hooks/useDesktop";

import NavBar from "../components/NavBar";
import ProfileCard from "../components/ProfileCard";
import IntroSection from "../components/IntroSection";
import ProjectSection from "../components/ProjectSection";
import Tools from "../components/Tools";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const Home = () => {
  const isDesktop = useDesktop(1024); // mismo corte que usás en tu CSS

  return (
    <>
      <NavBar />

      <main className={styles.page}>
         <aside className={styles.sidebar}>
    {isDesktop ? (
      <StickyBox offsetTop={72} offsetBottom={24} className={styles.stickyBox}>
        <ProfileCard />
      </StickyBox>
    ) : (
      <ProfileCard />
    )}
  </aside>

        <section className={styles.content}>
          <section id="home"><IntroSection /></section>
          <section id="projects"><ProjectSection /></section>
          <section id="tools"><Tools /></section>
          <section id="contact"><Contact stack /></section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
