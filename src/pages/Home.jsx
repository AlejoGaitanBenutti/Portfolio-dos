import React from 'react';
import ProfileCard from '../components/ProfileCard';
import IntroSection from '../components/IntroSection';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.container}>
      <ProfileCard />
      <IntroSection />
    </section>
  );
};

export default Home;