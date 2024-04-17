import styles from "@/app/components/job-experience.module.css";
import glow from "@/app/glowEffect.module.css";

const JobExperience = ({title, company, location, dates, responsibilities}) => {
    return (
        <div className={`${styles.jobExperience} ${glow.glowJobExperienceHover}`}>
            <h4><strong>{title}</strong> at {company} - {location} ({dates})</h4>
            <ul className={`${styles.responsibilitiesText}`}>
                {responsibilities.map((responsibility, index) => (
                    <li key={index} className={`${styles.responsibilityItem}`}>- {responsibility}</li>
                ))}
            </ul>
        </div>
    );
}

export default JobExperience;