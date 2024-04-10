import Image from "next/image";
import styles from "./profile.module.css";

import angelPic from '@/app/images/angel.jpg';


const Profile = () => {

    return (
        <section className={styles.profileContainer}>
            <div className={styles.profilePictureContainer}>
            <Image src={angelPic} alt="Angel Montes de Oca photo" className={styles.profilePicture}/>
            </div>
            <p className={styles.profileText}>I&apos;m a Software Engineer with a passion for creating beautiful and functional websites and
                desktop applications.</p>
        </section>);
}

export default Profile;