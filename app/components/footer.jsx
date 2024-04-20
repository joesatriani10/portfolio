'use client';
import styles from './footer.module.css';
import glow from '@/app/glowEffect.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p className={`${styles.text} ${glow.glowPink} `}>© {currentYear} Angel Montes de Oca</p>
        </footer>
    );
}

export default Footer;