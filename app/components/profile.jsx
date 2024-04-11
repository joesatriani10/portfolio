import Image from "next/image";
import styles from "./profile.module.css";
import glow from "@/app/glowEffect.module.css";
import angelPic from '@/app/images/angel.jpg';


const Profile = () => {

    return (
        <section className={`${styles.profileContainer} ${glow.glowProfile}`}>
            <div className={styles.profilePictureContainer}>
                <Image src={angelPic} alt="Angel Montes de Oca photo"
                       className={`${styles.profilePicture}`}/>
            </div>
            <p className={`${styles.profileText}`}><strong className={glow.glowBlueHover}>I&apos;m a Software Engineer </strong>
                with a passion for creating beautiful and functional websites and
                desktop applications.</p>
        </section>
    );
}

export default Profile;