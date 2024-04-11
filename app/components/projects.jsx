import styles from "@/app/page.module.css";
import css from "./projects.module.css";
import glow from "../glowEffect.module.css" ;
import foodPic from "../images/foodapp.png";
import Image from "next/image";

const Projects = () => {
    return (
        <section className={`${styles.section} ${glow.glowBlueHoverProjects}`}>
            <h1 className={css.title}>Projects</h1>
            <div className={css.grid}>
                <a href="https://food-next-js-seven.vercel.app/" className={`${css.card} ${glow.glowPinkHover}`} aria-label="Link to Project 1" target="_blank" rel="noopener noreferrer">
                    <h2>Food App [Next.js]</h2>
                    <Image
                        className={css.image}
                        src={foodPic}
                        alt="Preview of Food App"
                        layout="responsive"
                        objectFit="cover"
                        width={700} // or the width of your choice
                        height={400} // or the height of your choice
                    />
                </a>

                <a href="/project2" className={`${css.card} ${glow.glowPinkHover}`} aria-label="Link to Project 2">
                    <h3>Image Recognition</h3>
                    <p>Working on Page</p>
                </a>

                <a href="/project3" className={`${css.card} ${glow.glowPinkHover}`} aria-label="Link to Project 3">
                    <h3>Inno Setup Installer</h3>
                    <p>Working on Page</p>
                </a>

                <a href="/project4" className={`${css.card} ${glow.glowPinkHover}`} aria-label="Link to Project 4">
                    <h3>Recognition</h3>
                    <p>Working on Page</p>
                </a>
            </div>
        </section>
    );
}

export default Projects;