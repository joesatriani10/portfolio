import styles from './skills.module.css';
import glow from '@/app/glowEffect.module.css';

const Skills = () => {

    return (
        <section className={`${styles.skillsContainer} ${glow.section}`}>
            <h3 className={`${styles.skillsHeader}`}>Skills:</h3>
            <div className={`${styles.skillsGrid}`}>
                <div className={glow.glowPinkHover}>JavaScript</div>
                <div className={glow.glowPinkHover}>Node.js</div>
                <div className={glow.glowPinkHover}>HTML</div>
                <div className={glow.glowPinkHover}>CSS</div>
                <div className={glow.glowPinkHover}>React</div>
                <div className={glow.glowPinkHover}>Next.js</div>
                <div className={glow.glowPinkHover}>C#</div>
                <div className={glow.glowPinkHover}>Swagger</div>
                <div className={glow.glowPinkHover}>Net 6</div>
                <div className={glow.glowPinkHover}>API RESTful</div>
                <div className={glow.glowPinkHover}>Net Framework 4.8</div>
                <div className={glow.glowPinkHover}>UI/UI Design</div>
                <div className={glow.glowPinkHover}>MySQL</div>
                <div className={glow.glowPinkHover}>JWT</div>
                <div className={glow.glowPinkHover}>Entity Framework</div>
                <div className={glow.glowPinkHover}>DevOps</div>
                <div className={glow.glowPinkHover}>Server Management</div>
                <div className={glow.glowPinkHover}>CI/CD</div>
                <div className={glow.glowPinkHover}>Data Encryption</div>
                <div className={glow.glowPinkHover}>System Design</div>
                <div className={glow.glowPinkHover}>Software Design</div>
                <div className={glow.glowPinkHover}>MSSQL</div>
                <div className={glow.glowPinkHover}>Security</div>
                <div className={glow.glowPinkHover}>Team Collaboration</div>
            </div>
        </section>
    );
}

export default Skills;