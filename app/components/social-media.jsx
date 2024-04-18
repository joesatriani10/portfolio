'use client';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {useMediaQuery} from "@mui/material";

const SocialMedia = () => {

    const matches = useMediaQuery('(max-width:768px)');
    return (
        <>
            <a href="https://www.linkedin.com/in/angel-israel-real-montes-de-oca/" target="_blank" rel="noreferrer">
                <LinkedInIcon sx={{fontSize: matches ? 25 : 40}}/> </a>
            <a href="https://github.com/joesatriani10" target={"_blank"} rel="noreferrer"><GitHubIcon
                sx={{fontSize: matches ? 25 : 40}}/></a>
            <a href="https://www.youtube.com/@AngelMontesdeOca" target={"_blank"}
               rel="noreferrer"><YouTubeIcon sx={{fontSize: matches ? 25 : 40}}/></a>
        </>
    );
}

export default SocialMedia;