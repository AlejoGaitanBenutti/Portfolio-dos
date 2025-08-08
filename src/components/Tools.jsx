// src/components/Herramientas.jsx
import styles from "./Tools.module.css";

const tools = [
  { name: "Docker",       sub: "Contenedores y despliegue",           icon: "🐳" },
  { name: "Postman",      sub: "Pruebas de APIs",                     icon: "📮" },
  { name: "VS Code",      sub: "Editor de código",                    icon: "💻" },
  { name: "ChatGPT",      sub: "Asistente de IA",                     icon: "🤖" },
  { name: "Notion",       sub: "Organización y documentación",        icon: "🗂️" },
  { name: "Trello",       sub: "Gestión de tareas",                   icon: "📋" },
  { name: "GitHub",       sub: "Control de versiones",                icon: "🐙" },
  { name: "Vercel",       sub: "Hosting frontend",                    icon: "▲" },
  { name: "Render",       sub: "Hosting backend",                     icon: "🖥️" },
  { name: "SingleStore",  sub: "Base de datos distribuida",           icon: "🗄️" },
];

export default function Tools() {
  return (
    <section className={styles.section} id="herramientas">
      {/* Columna izquierda: título */}
      <header className={styles.header}>
        <span className={styles.kicker}>HERRAMIENTAS</span>
        <h2 className={styles.title}>QUE UTILIZO</h2>
      </header>

      {/* Columna derecha: grilla de tarjetas */}
      <div className={styles.grid}>
        {tools.map((t, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.iconWrap} aria-hidden="true">{t.icon}</div>
            <div className={styles.texts}>
              <h3 className={styles.name}>{t.name}</h3>
              <p className={styles.sub}>{t.sub}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
