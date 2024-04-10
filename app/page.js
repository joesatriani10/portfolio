import styles from './page.module.css';
import Projects from "@/app/components/projects";
import Header from "@/app/components/header";
import Profile from "@/app/components/profile";
import Skills from "@/app/components/skills";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <Profile/>
            <Skills/>
            <Projects/>
        </main>
    );
}