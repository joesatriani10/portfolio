'use client';
import styles from "@/app/page.module.css";
import css from "./projects.module.css";
import foodPic from "../images/foodapp.png";
import Image from "next/image";

const Projects = () => {
    return (
        <section className={styles.section}>
            <h2>Projects</h2>
            <div className={css.grid}>
                <a href="https://food-next-js-seven.vercel.app/" className={css.card} aria-label="Link to Project 1" target="_blank" rel="noopener noreferrer">
                    <h3>Food App</h3>
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

                <a href="/project2" className={css.card} aria-label="Link to Project 2">
                    <h3>Project 2</h3>
                    <p>Description of Project 2</p>
                </a>

                <a href="/project3" className={css.card} aria-label="Link to Project 3">
                    <h3>Project 3</h3>
                    <p>Description of Project 3</p>
                </a>

                <a href="/project4" className={css.card} aria-label="Link to Project 4">
                    <h3>Project 4</h3>
                    <p>Description of Project 4</p>
                </a>
            </div>
        </section>
    );
}

export default Projects;