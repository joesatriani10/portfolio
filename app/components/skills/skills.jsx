'use client';
import '../../global.css';
import styles from './skills.module.css';

const Skills = () => {
    return (
        <section className={styles.skillsSection}>
            <div className={styles.skillsContainer}>
                <div className={styles.skillsIntro}>
                    <h3 className="sectionTitle">Skills</h3>
                    <p className="sectionSubtitle">
                        Core stack and practices used to ship reliable software.
                    </p>
                </div>

                <div className={styles.category}>
                    <h4 className={styles.subtitle}>Frontend</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>React</div>
                        <div className={styles.card}>JavaScript (ES6+)</div>
                        <div className={styles.card}>TypeScript</div>
                        <div className={styles.card}>HTML/CSS</div>
                        <div className={styles.card}>CSS-in-JS</div>
                    </div>
                </div>

                <div className={styles.category}>
                    <h4 className={styles.subtitle}>Backend</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>Java</div>
                        <div className={styles.card}>C#/.NET</div>
                        <div className={styles.card}>REST APIs</div>
                        <div className={styles.card}>JWT</div>
                        <div className={styles.card}>Swagger/OpenAPI</div>
                    </div>
                </div>

                <div className={styles.category}>
                    <h4 className={styles.subtitle}>Data</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>SQL</div>
                        <div className={styles.card}>PostgreSQL</div>
                        <div className={styles.card}>MS SQL Server</div>
                        <div className={styles.card}>MySQL</div>
                        <div className={styles.card}>Data Modeling</div>
                    </div>
                </div>

                <div className={styles.category}>
                    <h4 className={styles.subtitle}>DevOps</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>GitLab CI/CD</div>
                        <div className={styles.card}>Docker</div>
                        <div className={styles.card}>Linux</div>
                        <div className={styles.card}>Windows</div>
                        <div className={styles.card}>AWS</div>
                    </div>
                </div>

                <div className={styles.category}>
                    <h4 className={styles.subtitle}>Practices</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>Agile</div>
                        <div className={styles.card}>SDLC</div>
                        <div className={styles.card}>Code Reviews</div>
                        <div className={styles.card}>Mentoring</div>
                        <div className={styles.card}>QA Collaboration</div>
                        <div className={styles.card}>Automated Testing</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
