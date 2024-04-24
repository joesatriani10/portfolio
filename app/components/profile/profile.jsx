import Image from "next/image";
import styles from "./profile.module.css";
import glow from "@/app/glowEffect.module.css";
import DownloadResume from "@/app/components/download-resume/download-resume";


const Profile = () => {


    return (<>
            <section className={`${styles.profileContainer} ${glow.glowProfile}`}>
                <div className={styles.profilePictureContainer}>
                    <Image src={"/images/angel.jpg"} alt="Angel Montes de Oca photo"
                           className={`${styles.profilePicture}`} width={512}
                           height={512}/>
                </div>
                <p className={`${styles.profileText}`}><strong className={glow.glowBlueHover}>I&apos;m a Full Stack Developer </strong>
                    with a passion for creating beautiful and functional websites and
                    desktop applications.</p>

            </section>
            <DownloadResume/>
        </>);
}

export default Profile;