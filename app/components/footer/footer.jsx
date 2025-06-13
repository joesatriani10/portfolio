'use client';
import '../../global.css';
import styles from './footer.module.css';
import SocialMedia from '@/app/components/social-media/social-media';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer} role="separator">
            <div className={styles.divider}></div>
            <div className={styles.socialMedia}>
                <SocialMedia />
            </div>
            <p className={styles.text}>© {currentYear} Angel Montes de Oca</p>
        </footer>
    );
};

export default Footer;