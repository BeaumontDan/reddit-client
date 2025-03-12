import React from 'react';
import styles from '../footer/Footer.module.css';

const Footer = () => {

  return (
    <div className={styles.Footer}>
      <p>
        <a className={styles.footerLink} href="https://codecademy.com" title="Codecademy Homepage">Codecademy</a> project by <a className={styles.footerLink} href="https://github.com/BeaumontDan" title="GitHub Profile">Dan Beaumont</a>: <a className={styles.footerLink} href="https://github.com/BeaumontDan/reddit-client" title="Code Solution">Reddit Minimal Client</a> 
      </p>
    </div>
  );

};

export default Footer;
