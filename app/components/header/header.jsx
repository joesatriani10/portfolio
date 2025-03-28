'use client';
import { motion } from 'framer-motion';
import '../../global.css';
import styles from './header.module.css';
import SocialMedia from "@/app/components/social-media/social-media";

const Header = () => {
    return (
        <motion.header
            className={styles.header}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            <div className={styles.textContainer}>
                <h1 className={styles.cyberpunkTitle}>Angel Montes de Oca</h1>
                <p className={styles.cyberpunkSubtitle}>Full Stack Developer</p>
            </div>
            <div className={styles.rightContainer}>
                <SocialMedia />
            </div>
        </motion.header>
    );
};

export default Header;