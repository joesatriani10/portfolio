'use client';
import styles from './header.module.css';
import Link from "next/link";
import Navigation from "@/app/components/navigation/navigation";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <h1 className={styles.name}>
                    <Link className={styles.brandLink} href="/">Angel Montes de Oca</Link>
                </h1>
                <span className={styles.role}>Senior Full-Stack Engineer</span>
            </div>
            <div className={styles.navArea}>
                <Navigation />
                <a className={`button buttonGhost ${styles.contactButton}`} href="mailto:joesatriani10@gmail.com">
                    Contact
                </a>
            </div>
        </header>
    );
};

export default Header;
