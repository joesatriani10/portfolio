import '../../global.css';
import styles from './skills.module.css';

const Skills = () => {

    return (
        <section className={`${styles.skillsContainer}`}>
            <h3 className={`${styles.skillsHeader}`}>Skills:</h3>
            <div className={`${styles.skillsGrid}`}>
                <div >JavaScript</div>
                <div >Node.js</div>
                <div >HTML</div>
                <div >CSS</div>
                <div >React</div>
                <div >Next.js</div>
                <div >C#</div>
                <div >Swagger</div>
                <div >Net 6</div>
                <div >API RESTful</div>
                <div >Net Framework 4.8</div>
                <div >UI/UX Design Principles</div>
                <div >MySQL</div>
                <div >JWT</div>
                <div >Entity Framework</div>
                <div >DevOps</div>
                <div >Server Management</div>
                <div >CI/CD</div>
                <div >Data Encryption</div>
                <div >System Design</div>
                <div >Software Design</div>
                <div >MSSQL</div>
                <div >Security</div>
                <div >Team Collaboration</div>
                <div >AWS RDS</div>
                <div >AWS S3</div>
            </div>
        </section>
    );
}

export default Skills;