'use client';
import '../../global.css';
import styles from './job-experience.module.css';

const JobExperience = ({ title, company, location, dates, responsibilities }) => {
    return (
        <div className={styles.jobExperience}>
            <h4><strong>{title}</strong> at {company} - {location} ({dates})</h4>
            <ul className={styles.noBullets}>
                {responsibilities.map((responsibility, index) => (
                    <li key={index} className={styles.responsibilityItem}>{responsibility}</li>
                ))}
            </ul>
        </div>
    );
};

export default JobExperience;