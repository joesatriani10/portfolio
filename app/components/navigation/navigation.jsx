'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.css';

const Navigation = () => {
    const pathname = usePathname();

    const linkClass = (path) =>
        `${styles.link} ${pathname === path ? styles.active : ''}`;

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={linkClass('/')}>Profile</Link>
            <Link href="/experience" className={linkClass('/experience')}>Experience</Link>
            <Link href="/projects" className={linkClass('/projects')}>Projects</Link>
            <Link href="/skills" className={linkClass('/skills')}>Skills</Link>
        </nav>
    );
};

export default Navigation;
