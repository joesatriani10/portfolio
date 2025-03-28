'use client';
import '../../global.css';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import styles from "./download-resume.module.css";

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

    return (
        <div className={styles.downloadContainer}>
            <div className={styles.downloadButton} onClick={handleDownload}>
                <span>Download my latest resume</span>
                <PictureAsPdfOutlinedIcon sx={{ fontSize: 28, color: 'inherit' }} />
            </div>
        </div>
    );
};

export default DownloadResume;