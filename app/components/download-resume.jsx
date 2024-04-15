'use client';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import glow from "../glowEffect.module.css";
import styles from "../components/download-resume.module.css";

const DownloadResume = () => {
    const handleDownload = async (event) => {
        event.preventDefault();
        const response = await fetch('/resume.pdf');
        const data = await response.blob();
        const blobURL = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = blobURL;
        link.download = 'angel-montes-de-oca-resume.pdf';
        link.click();
        URL.revokeObjectURL(blobURL);
    };

    return(
        <div className={styles.downloadContainer}>
            <p className={`${glow.glowYellowHover} ${styles.downloadButton}`} onClick={handleDownload}>Download my
                latest resume</p>
            <PictureAsPdfOutlinedIcon/>
        </div>
    );

}

export default DownloadResume;