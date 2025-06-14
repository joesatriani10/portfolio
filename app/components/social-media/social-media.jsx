'use client';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useMediaQuery } from "@mui/material";
import styles from './social-media.module.css';

const SocialMedia = () => {
    const matches = useMediaQuery('(max-width:768px)');
    const iconSize = matches ? 15 : 25;

    return (
        <>
            <a
                aria-label="LinkedIn"
                className={styles.socialMediaLink}
                href="https://www.linkedin.com/in/angel-israel-real-montes-de-oca/"
                target="_blank"
                rel="noreferrer"
            >
                <LinkedInIcon sx={{ fontSize: iconSize, color: 'inherit' }} />
            </a>

            <a
                aria-label="GitHub"
                className={styles.socialMediaLink}
                href="https://github.com/joesatriani10"
                target="_blank"
                rel="noreferrer"
            >
                <GitHubIcon sx={{ fontSize: iconSize, color: 'inherit' }} />
            </a>

            {/*<a*/}
            {/*    aria-label="Youtube"*/}
            {/*    className={styles.socialMediaLink}*/}
            {/*    href="https://www.youtube.com/@AngelMontesdeOca"*/}
            {/*    target="_blank"*/}
            {/*    rel="noreferrer"*/}
            {/*>*/}
            {/*    <YouTubeIcon sx={{ fontSize: iconSize, color: 'inherit' }} />*/}
            {/*</a>*/}
        </>
    );
};

export default SocialMedia;