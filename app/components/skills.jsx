import styles from './skills.module.css';

const Skills = () => {

    return (
        <section className={styles.skillsContainer}>
            <h3 className={styles.skillsHeader}>Skills and Experience:</h3>
            <ul className={styles.skillsList}>
                <li>JavaScript, HTML, CSS, React, and Next.js</li>
                <li>UI/UI Design</li>
                <li>C#, Swagger, Net 6, API RESTful, Net Framework 4.8</li>
                <li>MSSQL, MySQL, JWT, Entity Framework</li>
                <li>CI/CD, DevOps, Server Management</li>
                <li>Security, Data Encryption, System Design, Software Design</li>
                <li>Team Collaboration</li>
            </ul>
        </section>
    );
}

export default Skills;