'use client';
import styles from './cyber-bar.module.css';

const CyberBar = ({ className = '' }) => {
    return <span className={`${styles.cyberBar} ${className}`} aria-hidden="true"></span>;
};

export default CyberBar;
