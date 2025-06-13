'use client';
import styles from './header.module.css';
import DarkModeToggle from "@/app/components/dark-mode-toggle/dark-mode-toggle";
import Link from "next/link";
import Navigation from "@/app/components/navigation/navigation";

const Header = () => {
    return (
        <>
        <div className={styles.header}>
            <div className={styles.textContainer}>
                <h1>
                    <Link className={`${styles.cyberpunkTitle} audiowideText`} href="/">Angel Montes de Oca</Link>
                </h1>
            </div>
            <div className={styles.rightContainer}>
                <Navigation/>
                <span style={{ margin: '0 0.75rem', opacity: 0.6 }}>|</span>
                <DarkModeToggle />
            </div>
        </div>
        </>
    );
};

export default Header;
