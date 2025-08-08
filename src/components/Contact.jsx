import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Mail, Phone, MapPin, Check, ArrowRight } from "lucide-react";

const budgetOptions = [
  { value: "lt2k", label: "Menos de $200" },
  { value: "2k-5k", label: "$200 – $400" },
  { value: "5k-10k", label: "$400 – $800" },
  { value: "gt10k", label: "Más de $800" },
];

const projectTypes = [
  { value: "website", label: "Sitio web" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "app", label: "App" },
  { value: "branding", label: "Branding" },
  { value: "other", label: "Otro" },
];

export default function Contact({ stack = false }) {
  const [accepted, setAccepted] = useState(false);
  const [type, setType] = useState("website");

  function onSubmit(e) {
    e.preventDefault();
    alert("¡Gracias! Tu mensaje fue preparado para enviar.");
  }

  return (
    <section
      className={`${styles.section} ${stack ? styles.stack : ""}`}
      id="contact"
    >
     
     

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Panel de información */}
          <section className={styles.info}>
           

            <h1 className={styles.h1}>
              <span className={styles.h1Gradient}>TRABAJEMOS <span>JUNTOS</span></span>
            </h1>

             <p className={styles.breadcrumb}>
              <span className={styles.dot} />
              Disponible
            </p>

            <p className={styles.lead}>
              Cuéntame sobre tu proyecto y te responderé en menos de 24 horas
              con los próximos pasos. Me enfoco en resultados medibles,
              comunicación clara y una experiencia fluida de principio a fin.
            </p>

            <ul className={styles.bullets}>
              {[
                "Respuesta en menos de 24h",
                "Propuesta y alcances claros",
                "Confidencialidad y NDA a pedido",
              ].map((item) => (
                <li key={item} className={styles.bulletItem}>
                  <Check className={styles.bulletIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.cards}>
              <a href="mailto:alejogbs8@gmail.com" className={styles.card}>
                <span className={styles.cardIconBox}>
                  <Mail className={styles.cardIcon} />
                </span>
                <div>
                  <div className={styles.cardLabel}>Email</div>
                  <div className={styles.cardValue}>alejogbs8@gmail.com</div>
                </div>
              </a>

              <div className={styles.card}>
                <span className={styles.cardIconBox}>
                  <Phone className={styles.cardIcon} />
                </span>
                <div>
                  <div className={styles.cardLabel}>Teléfono</div>
                  <div className={styles.cardValue}>+34 000 000 000</div>
                </div>
              </div>

              <div className={`${styles.card} ${styles.cardFull}`}>
                <span className={styles.cardIconBox}>
                  <MapPin className={styles.cardIcon} />
                </span>
                <div>
                  <div className={styles.cardLabel}>Ubicación</div>
                  <div className={styles.cardValue}>Remoto • UTC−3 / UTC+1</div>
                </div>
              </div>
            </div>
          </section>

          {/* Formulario */}
          <section className={styles.formWrap} aria-labelledby="contact-form">
            <div className={styles.formCard}>
              <header className={styles.formHeader}>
                <h2 id="contact-form" className={styles.formTitle}>
                  Cuéntame sobre tu proyecto
                </h2>
                <p className={styles.formDesc}>
                  Completa el formulario y te escribiré con una propuesta inicial.
                </p>
              </header>

              <form onSubmit={onSubmit} className={styles.form}>
                {/* Nombre / Email */}
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label htmlFor="name">Nombre completo</label>
                    <input
                      id="name"
                      required
                      placeholder="Tu nombre"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className={styles.input}
                    />
                  </div>
                </div>

                {/* Empresa / Presupuesto */}
                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label htmlFor="company">Empresa (opcional)</label>
                    <input
                      id="company"
                      placeholder="Nombre de la empresa"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="budget">Presupuesto estimado</label>
                    <div className={styles.selectWrap}>
                      <select id="budget" defaultValue="2k-5k" className={styles.select}>
                        {budgetOptions.map((b) => (
                          <option key={b.value} value={b.value}>
                            {b.label}
                          </option>
                        ))}
                      </select>
                      <span className={styles.caret}>▾</span>
                    </div>
                  </div>
                </div>

                {/* Tipo de proyecto */}
                <div className={styles.field}>
                  <label className={styles.labelStrong}>Tipo de proyecto</label>
                  <div className={styles.pills}>
                    {projectTypes.map((t) => (
                      <label
                        key={t.value}
                        className={`${styles.pill} ${
                          type === t.value ? styles.pillActive : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={t.value}
                          checked={type === t.value}
                          onChange={() => setType(t.value)}
                          className={styles.visuallyHidden}
                        />
                        <span>{t.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mensaje */}
                <div className={styles.field}>
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    required
                    placeholder="Cuéntame objetivos, plazos y cualquier detalle relevante…"
                    className={styles.textarea}
                    rows={6}
                  />
                </div>

                {/* Privacidad */}
                <div className={styles.privacy}>
                  <input
                    id="privacy"
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className={styles.checkbox}
                  />
                  <label htmlFor="privacy" className={styles.privacyText}>
                    Acepto la política de privacidad y el tratamiento de mis datos para fines de contacto.
                  </label>
                </div>

                {/* Botón */}
                <div className={styles.actions}>
                  <button
                    type="submit"
                    disabled={!accepted}
                    className={`${styles.button} ${
                      !accepted ? styles.buttonDisabled : ""
                    }`}
                  >
                    Enviar mensaje
                    <ArrowRight className={styles.buttonIcon} />
                  </button>

                  <p className={styles.altContact}>
                    ¿Prefieres email? Escribe a <span>alejogbs8@gmail.com</span>
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
