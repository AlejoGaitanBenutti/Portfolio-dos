import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top grid */}
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <div className={styles.brandRow}>
              <div className={styles.brandLogo}>Alejo</div>
              <div className={styles.brandName}>Gaitan Benutti</div>
            </div>
            <p className={styles.brandDesc}>
                 Desarrollo soluciones web personalizadas con enfoque en calidad, rendimiento y experiencia de usuario.            
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="GitHub" className={styles.socialBtn}>🐙</a>
              <a href="#" aria-label="LinkedIn" className={styles.socialBtn}>in</a>
              <a href="#" aria-label="Twitter/X" className={styles.socialBtn}>𝕏</a>
            </div>
          </div>
        <div className={styles.containNavegacionServicios}>
          {/* Navegación */}
          <nav className={styles.col}>
            <h4 className={styles.colTitle}>Navegación</h4>
            <ul className={styles.linkList}>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>

          {/* Servicios */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Servicios</h4>
            <ul className={styles.linkList}>
              <li><a href="#services">Sitio web</a></li>
              <li><a href="#services">E-commerce</a></li>
              <li><a href="#services">Branding</a></li>
              <li><a href="#services">Apps</a></li>
              <li><a href="#services">Consultoría</a></li>
            </ul>
          </div>
        </div>
          {/* Contacto (cards) */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contacto</h4>

            <a href="mailto:tu@email.com" className={styles.ctaCard}>
              <span className={styles.ctaIcon}>✉️</span>
              <div className={styles.ctaText}>
                <span className={styles.ctaLabel}>Email</span>
                <span className={styles.ctaValue}>alejogbs8@gmail.com</span>
              </div>
            </a>

            <div className={styles.ctaCard}>
              <span className={styles.ctaIcon}>📞</span>
              <div className={styles.ctaText}>
                <span className={styles.ctaLabel}>Teléfono</span>
                <span className={styles.ctaValue}>+54 343 6132 888</span>
              </div>
            </div>

            <div className={styles.ctaCard}>
              <span className={styles.ctaIcon}>📍</span>
              <div className={styles.ctaText}>
                <span className={styles.ctaLabel}>Ubicación</span>
                <span className={styles.ctaValue}>Remoto · UTC−3 / UTC+1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className={styles.divider} />

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          
          <p className={styles.copy}>© {year} Alejo Gaitan Benutti. Todos los derechos reservados.</p>
          <div className={styles.containerLegal}>
          <ul className={styles.legalList}>
            <li><a href="#privacy">Privacidad</a></li>
            <li><a href="#terms">Términos</a></li>
          </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
