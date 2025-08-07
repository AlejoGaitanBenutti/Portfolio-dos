import React from 'react';
import styles from './ProfileCard.module.css';
import profileImage from '../assets/profile-test.jpg';

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.curveIcon}>
        <img src="src/assets/icons/curveLogo.png" alt="Icono curvo fondo" />
      </div>
      <div className={styles.imageWrapper}>
        <img src={profileImage} alt="Alejo" className={styles.avatar} />
      </div>
      <h2 className={styles.name}>Alejo Gaitan Benutti</h2>

      <div className={styles.icon}>
        <img src="src/assets/icons/fireLogo.png" alt="icono fuego" />
      </div>

      <p className={styles.description}>
        Desarrollador full-stack especializado en soluciones web innovadoras.
      </p>

      <div className={styles.social}>
    <a
  href="#"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#f46c38',
    textDecoration: 'none',
    fontSize: '0.90rem',
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.87 10.94c.58.1.79-.25.79-.55v-1.96c-3.21.7-3.89-1.55-3.89-1.55-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.46-2.3 1.2-3.11-.12-.29-.52-1.46.11-3.06 0 0 .98-.31 3.2 1.19a11.04 11.04 0 0 1 5.83 0C17.7 4.13 18.7 4.44 18.7 4.44c.63 1.6.24 2.77.12 3.06.75.81 1.2 1.85 1.2 3.11 0 4.44-2.7 5.42-5.27 5.7.42.36.79 1.09.79 2.21v3.28c0 .3.21.65.8.54A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
  </svg>
 
</a>
       <a
  href="#"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#f46c38',
    textDecoration: 'none',
    fontSize: '0.85rem',
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4.98 3.5C3.87 3.5 3 4.38 3 5.5S3.87 7.5 4.98 7.5 7 6.62 7 5.5 6.1 3.5 4.98 3.5zM3.5 8.98H6.5V20.5H3.5V8.98zM9.5 8.98H12.3V10.4H12.36C12.79 9.67 13.75 8.9 15.13 8.9C18.11 8.9 18.5 10.79 18.5 13.38V20.5H15.5V13.9C15.5 12.47 15.48 10.68 13.62 10.68C11.74 10.68 11.5 12.2 11.5 13.8V20.5H8.5V8.98H9.5z" />
  </svg>
  
</a>
        <a
  href="#"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#f46c38',
    textDecoration: 'none',
    fontSize: '0.85rem',
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4 6h16l-8 5zm0 2l8 5H4l8-5z" />
  </svg>

</a>
<a
  href="#"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#f46c38',
    textDecoration: 'none',
    fontSize: '0.85rem',
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm4.5-3c.83 0 1.5.67 1.5 1.5S17.33 9 16.5 9 15 8.33 15 7.5 15.67 6 16.5 6z" />
  </svg>
  
</a>

      </div>
    </div>
  );
};

export default ProfileCard;
