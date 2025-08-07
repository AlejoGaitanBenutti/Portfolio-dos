import React , { useEffect, useState } from 'react';
import styles from './IntroSection.module.css';

const IntroSection = () => {

  const WORDS = ['WEB', 'DE SOFTWARE'];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

   useEffect(() => {
    const fullWord = WORDS[wordIndex];
    const baseSpeed = 70;          // velocidad por carácter
    const typingSpeed = isDeleting ? baseSpeed / 0.8 : baseSpeed;

    const tick = () => {
      const next = isDeleting
        ? fullWord.substring(0, displayText.length - 1)
        : fullWord.substring(0, displayText.length + 1);

      setDisplayText(next);

      // llegó al final (palabra completa)
      if (!isDeleting && next === fullWord) {
        setTimeout(() => setIsDeleting(true), 1400); // pausa con palabra completa
        return;
      }
      // borró todo
      if (isDeleting && next === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        return;
      }
    };

    const t = setTimeout(tick, typingSpeed);
    return () => clearTimeout(t);
  }, [displayText, isDeleting, wordIndex]);


  return (
    <div className={styles.intro}>
     <h1 className={styles.title}>
  <span className={styles.gray}>DESARROLLADOR</span><br />
  <span className={styles.dynamic}>
    <span aria-live="polite">{displayText}</span>
    <span className={styles.caret} aria-hidden="true" />
  </span>
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.techIcon}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>

      </div>
      <p className={styles.cardTitle}>DESARROLLO WEB,<br /> FULL STACK</p>
      <div className={styles.containArrow}>
         <div>
      <p className={styles.cardSubtitle}>Del desarrollo al despliegue, todo integrado</p>
      </div>
        <span className={styles.cardArrow}>
          <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="24" height="24">
            <path className={styles.arrowPath} d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" />
          </svg>
        </span>
      </div>
    </div>

  {/* CARD 2: Tecnologías específicas */}
<div className={`${styles.card} ${styles.green}`}>
  {/* Icono representativo (ej. engranaje) */}
  <div className={styles.techLogos}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.techIcon}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  </div>

  {/* Título */}
  <p className={styles.cardTitle}>REACT, PHP, SQL,<br />LARAVEL</p>

 
  <div className={styles.containArrow}>
    <div>
      <p className={styles.cardSubtitle}>Stack moderno para soluciones escalables</p>
    </div>
    <span className={styles.cardArrow}>
      <svg className={styles.arrowIcon} viewBox="0 0 24 24" width="24" height="24">
        <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z" />
      </svg>
    </span>
  </div>
</div>

</div>

    </div>




  );
};

export default IntroSection;
