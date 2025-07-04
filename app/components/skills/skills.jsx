'use client';
import '../../global.css';
import styles from './skills.module.css';

const Skills = () => {
    return (
        <section className={styles.skillsSection}>
            <div className={styles.skillsContainer}>
                <h3 className={`${styles.skillsHeader} audiowideText`}>Skills & Technologies</h3>

                <div className={styles.category}>
                    <h4 className={`${styles.subtitle} audiowideText`}>Programming</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>C#</div>
                        <div className={styles.card}>JavaScript</div>
                        <div className={styles.card}>TypeScript</div>
                        <div className={styles.card}>Node.js</div>
                        <div className={styles.card}>Python</div>
                        <div className={styles.card}>WinForms</div>
                        <div className={styles.card}>Entity Framework</div>
                    </div>
                </div>

                <div className={styles.category}>
                    <h4 className={`${styles.subtitle} audiowideText`}>Frontend</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>ReactJS</div>
                        <div className={styles.card}>Next.js</div>
                        <div className={styles.card}>HTML5</div>
                        <div className={styles.card}>CSS</div>
                        <div className={styles.card}>UI/UX Design Principles</div>
                    </div>
                </div>

                <div className={styles.category}>
                    <h4 className={`${styles.subtitle} audiowideText`}>Backend</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>.NET 6</div>
                        <div className={styles.card}>.NET Framework 4.8</div>
                        <div className={styles.card}>RESTful APIs</div>
                        <div className={styles.card}>Entity Framework</div>
                        <div className={styles.card}>Java</div>
                        <div className={styles.card}>Python</div>
                    </div>
                </div>

                <div className={styles.category}>
                    <h4 className={`${styles.subtitle} audiowideText`}>Databases</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>MSSQL</div>
                        <div className={styles.card}>MySQL</div>
                        <div className={styles.card}>AWS RDS</div>
                        <div className={styles.card}>PostgreSQL</div>
                        <div className={styles.card}>mongoDB</div>
                    </div>
                </div>

                <div className={styles.category}>
                    <h4 className={`${styles.subtitle} audiowideText`}>Security & DevOps</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>JWT</div>
                        <div className={styles.card}>Data Encryption</div>
                        <div className={styles.card}>Swagger</div>
                        <div className={styles.card}>CI/CD</div>
                        <div className={styles.card}>Server Management</div>
                    </div>
                </div>

                <div className={styles.category}>
                    <h4 className={`${styles.subtitle} audiowideText`}>Cloud & Infrastructure</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>AWS S3</div>
                        <div className={styles.card}>GitLab (Pipelines, Runners, Servers)</div>
                        <div className={styles.card}>EP</div>
                        <div className={styles.card}>Firewalls</div>
                    </div>
                </div>

                <div className={styles.category}>
                    <h4 className={`${styles.subtitle} audiowideText`}>Software Design</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>System Design</div>
                        <div className={styles.card}>Software Architecture</div>
                        <div className={styles.card}>Performance Optimization</div>
                    </div>
                </div>

                <div className={styles.category}>
                    <h4 className={`${styles.subtitle} audiowideText`}>Operating Systems</h4>
                    <div className={styles.grid}>
                        <div className={styles.card}>Windows 10 Pro / 11 Pro</div>
                        <div className={styles.card}>Windows Server 2019</div>
                        <div className={styles.card}>macOS</div>
                        <div className={styles.card}>Linux (Debian-based)</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;