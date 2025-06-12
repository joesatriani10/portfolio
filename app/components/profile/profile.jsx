'use client';
import '../../global.css';
import Image from "next/image";
import styles from "./profile.module.css";
import DownloadResume from "@/app/components/download-resume/download-resume";
import {Box} from "@mui/material";

const Profile = () => {
    return (
        <>
            <section className={`${styles.profileContainer} fullscreen`}>
                <div>
                    <Image
                        src="/images/angel.webp"
                        alt="Angel Montes de Oca photo"
                        className={styles.profilePicture}
                        width={256}
                        height={256}
                    />
                </div>
                <p className={styles.profileText}>
                    <strong className={"audiowideText"}>I&apos;m a Full Stack Developer</strong> with a passion for building beautiful and functional websites and desktop applications.
                </p>
            </section>
            <Box>
                <DownloadResume/>
            </Box>
        </>
    );
};

export default Profile;