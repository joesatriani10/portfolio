import Image from "next/image";
import styles from "../components/profile.module.css";
import glow from "../glowEffect.module.css";
import angelPic from '../images/angel.jpg';
import DownloadResume from "@/app/components/download-resume";


const Profile = () => {


    return (<>
            <section className={`${styles.profileContainer} ${glow.glowProfile}`}>
                <div className={styles.profilePictureContainer}>
                    <Image src={angelPic} alt="Angel Montes de Oca photo"
                           className={`${styles.profilePicture}`}/>
                </div>
                <p className={`${styles.profileText}`}><strong className={glow.glowBlueHover}>I&apos;m a Software
                    Engineer </strong>
                    with a passion for creating beautiful and functional websites and
                    desktop applications.</p>

            </section>
            <DownloadResume/>
        </>);
}

export default Profile;