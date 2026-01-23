'use client';
import '../../global.css';
import styles from './job-experience.module.css';

const JobExperience = ({ title, company, location, dates, responsibilities }) => {
    return (
        <div className={styles.jobExperience}>
            <div className={styles.header}>
                <h4 className={styles.title}>
                    {title}
                </h4>
                <p className={styles.meta}>
                    {company} · {location} · {dates}
                </p>
            </div>
            <ul className={styles.noBullets}>
                {responsibilities.map((responsibility, index) => (
                    <li key={index} className={styles.responsibilityItem}>
                        {responsibility}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobExperience;
