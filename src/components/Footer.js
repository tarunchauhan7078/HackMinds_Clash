import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <p className={styles.footerText}>
        &copy; 2024 Hackminds Clash. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
