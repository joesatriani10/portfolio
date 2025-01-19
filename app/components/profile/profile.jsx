import '../../global.css';
import Image from "next/image";
import styles from "./profile.module.css";
import DownloadResume from "@/app/components/download-resume/download-resume";


const Profile = () => {


    return (<>
            <section className={`${styles.profileContainer} fullscreen`}>
                <div>
                    <Image src={"/images/angel.webp"} alt="Angel Montes de Oca photo"
                           className={`${styles.profilePicture}`} width={256}
                           height={256}/>
                </div>
                <p className={`${styles.profileText}`}><strong>I&apos;m a Full Stack Developer </strong>
                    with a passion for creating beautiful and functional websites and
                    desktop applications.</p>

            </section>
            <DownloadResume/>
        </>);
}

export default Profile;