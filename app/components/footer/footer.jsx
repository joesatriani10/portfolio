'use client';
import '../../global.css';
import styles from './footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer} role="separator">
            <div className={styles.divider}></div>
            <p className={styles.text}>© {currentYear} Angel Montes de Oca</p>
        </footer>
    );
};

export default Footer;