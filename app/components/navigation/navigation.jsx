'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.css';

const Navigation = () => {
    const pathname = usePathname();

    const linkClass = (path) =>
        `${styles.link} ${pathname === path ? styles.active : ''}`;

    return (
        <nav className={`${styles.navbar} audiowideText`}>
            <Link href="/" className={linkClass('/')}>/<strong>Profile</strong>/</Link>
            <Link href="/experience" className={linkClass('/experience')}>/<strong>Experience</strong>/</Link>
            <Link href="/projects" className={linkClass('/projects')}>/<strong>Projects</strong>/</Link>
            <Link href="/skills" className={linkClass('/skills')}>/<strong>Skills</strong>/</Link>
        </nav>
    );
};

export default Navigation;
