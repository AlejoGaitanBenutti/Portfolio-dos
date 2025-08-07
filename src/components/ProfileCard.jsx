import React from 'react';
import styles from './profileCard.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className={styles["profile-card-container"]}>
      <div className={styles["profile-card"]}>
        <div className={styles["decoration-circle-1"]}></div>
        <div className={styles["decoration-circle-2"]}></div>

        <div className={styles["card-content"]}>
          <div className={styles["profile-image-container"]}>
            <div className={styles["image-wrapper"]}>
              <div className={styles["image-frame-1"]}></div>
              <div className={styles["image-frame-2"]}></div>
              <img
                src="/imagenes/profile-test.jpg"
                alt="Foto de perfil"
                className={styles["profile-image"]}
              />
            </div>
            <div className={styles["status-badge"]}>
              <span className={styles["status-text"]}>Disponible</span>
            </div>
          </div>

          <div className={styles["profile-info"]}>
            <h2 className={styles["profile-name"]}>Alejo Gaitan Benutti</h2>
            <p className={styles["profile-title"]}>Desarrollador Full-Stack Jr <br /> (React / PHP)</p>
            <div className={styles["profile-location"]}>
              <FaMapMarkerAlt className={styles["location-icon"]} />
              <span>Crespo, Entre Ríos</span>
            </div>
          </div>

          <div className={styles["profile-description"]}>
            <p>
              Soy Alejo, desarrollador full-stack junior. Disfruto construir interfaces con React y APIs en PHP/MySQL. Vengo de proyectos personales y certificaciones UTN; quiero aportar en un equipo donde pueda seguir aprendiendo y entregar valor desde el día uno. Disponible (UTC-3).
            </p>
          </div>
          <div className={styles["profile-formation"]}>
            <p className={styles["formation-title"]}>Formación</p>
            <p className={styles["formation-text"]}>
              Tecnicatura en Programación (en curso) • UTN (e-learning): Professional Front-end , Diplomatura en PHP
            </p>
          </div>
          

          <div className={styles["skills-container"]}>
            <span className={styles["skill-badge"]}>React</span>
            <span className={styles["skill-badge"]}>PHP</span>
            <span className={styles["skill-badge"]}>MySQL</span>
            <span className={styles["skill-badge"]}>Docker</span>
            <span className={styles["skill-badge"]}>JavaScript</span>
            <span className={styles["skill-badge"]}>Github</span>
            <span className={styles["skill-badge"]}>Render</span>
            <span className={styles["skill-badge"]}>Vercel</span>
            <span className={styles["skill-badge"]}>Postman</span>
            <span className={styles["skill-badge"]}>Trello</span>
          </div>

          

          <div className={styles["social-links"]}>
            <a
              href="https://github.com/alejogaitan"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles["social-button"]} ${styles["github"]}`}
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/alejogaitan"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles["social-button"]} ${styles["linkedin"]}`}
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:alejo@email.com"
              className={`${styles["social-button"]} ${styles["email"]}`}
            >
              <FaEnvelope />
            </a>
          </div>

          <button className={styles["cta-button"]}>
            Descargar CV
          </button>
        </div>

        <div className={styles["decorative-line"]}></div>
      </div>
    </div>
  );
};

export default ProfileCard;