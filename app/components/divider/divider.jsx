'use client';
import styles from './divider.module.css';

const Divider = () => {
    return (
        <div className={styles.dividerWrapper}>
            <div className={styles.divider} role="separator"></div>
        </div>
    );
};

export default Divider;