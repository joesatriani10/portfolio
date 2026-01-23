'use client';
import '../../global.css';
import styles from './footer.module.css';
import SocialMedia from '@/app/components/social-media/social-media';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.socialMedia}>
                <SocialMedia />
            </div>
            <p className={styles.text}>© {currentYear} Angel Montes de Oca</p>
            <p className={styles.subtext}>Senior Full-Stack Engineer</p>
        </footer>
    );
};

export default Footer;
