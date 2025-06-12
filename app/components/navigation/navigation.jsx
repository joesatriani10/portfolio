'use client';
import Link from 'next/link';
import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/experience" className={styles.link}>Experience</Link>
            <Link href="/projects" className={styles.link}>Projects</Link>
            <Link href="/skills" className={styles.link}>Skills &amp; Technologies</Link>
        </nav>
    );
};

export default Navigation;
