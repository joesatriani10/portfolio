'use client';
import styles from './header.module.css';
import SocialMedia from "@/app/components/social-media/social-media";
import DarkModeToggle from "@/app/components/dark-mode-toggle/dark-mode-toggle";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.textContainer}>
                <h1>
                    <Link className={`${styles.cyberpunkTitle} audiowideText`} href="/">Angel Montes de Oca</Link>
                </h1>
            </div>
            <div className={styles.rightContainer}>
                <SocialMedia />
                <DarkModeToggle />
            </div>
        </div>
    );
};

export default Header;