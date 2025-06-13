'use client';
import styles from './header.module.css';
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
            </div>
        </div>
        </>
    );
};

export default Header;
