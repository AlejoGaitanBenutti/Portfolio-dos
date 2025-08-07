import React from 'react';
import styles from './IntroSection.module.css';

const IntroSection = () => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>
        <span className={styles.gray}>DESARROLLADOR</span> <br />
        DE <span className={styles.bold}>SOFTWARE</span>
      </h1>
     <p className={styles.text}>
  Apasionado por el desarrollo web y las soluciones prácticas.<br />
  Trabajo con tecnologías como React, PHP y bases de datos relacionales.<br />
  Estoy dando mis primeros pasos en el mundo profesional y busco integrarme a un equipo que valore el aprendizaje constante.
</p>

      <div className={styles.stats}>
        <div><strong>+4</strong><br />AÑOS APRENDIENDO Y CREANDO</div>
        <div><strong>+10</strong><br />PROYECTOS TERMINADOS</div>
        <div><strong>100%</strong><br />DISPONIBLE PARA TRABAJAR</div>
      </div>


     <div className={styles.cardsContainer}>

  {/* CARD 1: Desarrollo Web */}
  <div className={`${styles.card} ${styles.orange}`}>
    <div className={styles.techLogos}>
      <img src="/logos/react.svg" alt="React" />
    </div>
    <p className={styles.cardTitle}>DESARROLLO WEB,<br /> FULL STACK</p>
    <div className={styles.containArrow}>
      <span className={styles.cardArrow}>
        <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="24" height="24">
          <path className={styles.arrowPath} d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" />
        </svg>
      </span>
    </div>
  </div>

  {/* CARD 2: Tecnologías específicas */}
  <div className={`${styles.card} ${styles.green}`}>
    <div className={styles.techLogos}>
      <img src="/logos/php.svg" alt="Php" />
    </div>
    <p className={styles.cardTitle}>REACT, PHP, SQL,<br />LARAVEL</p>
    <div className={styles.containArrow}>
      <span className={styles.cardArrow}>
        <svg  viewBox="0 0 24 24" width="24" height="24">
          <path  d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" />
        </svg>
      </span>
    </div>
  </div>

</div>

    </div>




  );
};

export default IntroSection;
