'use client';
import '../../global.css';
import Image from "next/image";
import styles from "./profile.module.css";
import FloatingParticles from "@/app/components/floating-particles/floating-particles";

const Profile = () => {
    return (
        <>
            <section className={`${styles.profileContainer} fullscreen`}>
                <FloatingParticles />
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
        </>
    );
};

export default Profile;