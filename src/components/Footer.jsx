import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h3>Javoxir Hamidjanov<span>.</span></h3>
        </div>
        
        <ul className={styles.links}>
          <li><a href="#about">Men haqimda</a></li>
          <li><a href="#projects">Loyihalar</a></li>
          <li><a href="#contact">Bog'lanish</a></li>
        </ul>

        <div className={styles.socials}>
          <a href="https://t.me/username" target="_blank" rel="noreferrer">Telegram</a>
          <a href="https://github.com/username" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div className={styles.copyright}>
          <p>© {currentYear} Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;