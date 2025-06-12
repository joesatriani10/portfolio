'use client';
import Link from 'next/link';
import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={`${styles.navbar} audiowideText`}>
            <Link href="/" className={styles.link}>/<strong>Profile</strong>/</Link>
            <Link href="/experience" className={styles.link}>/<strong>Experience</strong>/</Link>
            <Link href="/projects" className={styles.link}>/<strong>Projects</strong>/</Link>
            <Link href="/skills" className={styles.link}>/<strong>Skills</strong>/</Link>
        </nav>
    );
};

export default Navigation;
