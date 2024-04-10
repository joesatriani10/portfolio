import Image from "next/image";
import pp from "./profile.module.css";
import styles from "@/app/globals.css";
import angelPic from '@/app/images/angel.jpg';


const Profile = () => {

    return (<section className={styles.section}>
        <Image src={angelPic} alt="Your Name" className={pp.profilePicture}/>
        <p>I&apos;m a Software Engineer with a passion for creating beautiful and functional websites and
            desktop applications.</p>
    </section>);
}

export default Profile;