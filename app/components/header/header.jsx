'use client';
import styles from './header.module.css';
import SocialMedia from "@/app/components/social-media/social-media";
import DarkModeToggle from "@/app/components/dark-mode-toggle/dark-mode-toggle";
import Link from "next/link";
import Navigation from "@/app/components/navigation/navigation";

const Header = () => {
    return (
        <>
        {/* TODO: Make more responsive */}
        <div className={styles.header}>
            <div className={styles.textContainer}>
                <h1>
                    <Link className={`${styles.cyberpunkTitle} audiowideText`} href="/">Angel Montes de Oca</Link>
                </h1>
            </div>
            <Navigation/>
            <div className={styles.rightContainer}>
                <SocialMedia />
                <span style={{ margin: '0 0.75rem', opacity: 0.6 }}>|</span>
                <DarkModeToggle />
            </div>
        </div>
        </>
    );
};

export default Header;