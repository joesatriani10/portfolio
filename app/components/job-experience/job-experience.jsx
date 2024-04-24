import styles from "@/app/components/job-experience/job-experience.module.css";

const JobExperience = ({title, company, location, dates, responsibilities}) => {
    return (
        <div className={`${styles.jobExperience}`}>
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