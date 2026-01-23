'use client';
import '../../global.css';
import Image from "next/image";
import styles from "./profile.module.css";
import FloatingParticles from "@/app/components/floating-particles/floating-particles";
import DownloadResume from "@/app/components/download-resume/download-resume";

const Profile = () => {
    return (
        <>
            <section className={styles.hero}>
                <FloatingParticles />
                <div className={styles.heroContent}>
                    <span className="eyebrow">Senior Full-Stack Engineer</span>
                    <h2 className={styles.headline}>
                        I build secure, reliable software that helps teams move fast.
                    </h2>
                    <p className={styles.summary}>
                        Senior full-stack engineer and tech lead with 8+ years building enterprise software,
                        including HIPAA-aligned systems. I ship end-to-end features across the SDLC and improve
                        reliability with CI/CD, secure APIs, and pragmatic troubleshooting.
                    </p>
                    <div className={styles.actions}>
                        <a className="button" href="mailto:joesatriani10@gmail.com">
                            Contact
                        </a>
                        <DownloadResume className={styles.resumeButton} />
                        <a
                            className="button buttonGhost"
                            href="https://www.linkedin.com/in/angel-israel-real-montes-de-oca/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div className={styles.meta}>
                        <span>Rialto, CA</span>
                        <span className={styles.dot}>•</span>
                        <a href="mailto:joesatriani10@gmail.com">joesatriani10@gmail.com</a>
                        <span className={styles.dot}>•</span>
                        <a href="https://angelmontesdev.com" target="_blank" rel="noreferrer">
                            angelmontesdev.com
                        </a>
                    </div>
                </div>
                <div className={styles.heroMedia}>
                    <Image
                        src="/images/angel.webp"
                        alt="Angel Montes de Oca photo"
                        className={styles.profilePicture}
                        width={360}
                        height={420}
                        priority
                    />
                    <div className={styles.badges}>
                        <span className="pill">HIPAA-aligned systems</span>
                        <span className="pill">CI/CD delivery</span>
                        <span className="pill">Secure APIs</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
