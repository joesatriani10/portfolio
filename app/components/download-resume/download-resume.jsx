'use client';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import styles from "./download-resume.module.css";

const DownloadResume = ({ className = "" }) => {
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
        <button
            className={`${styles.downloadButton} button ${className}`}
            onClick={handleDownload}
            type="button"
            aria-label="Download resume"
        >
            <span>Resume</span>
            <PictureAsPdfOutlinedIcon sx={{ fontSize: 20, color: 'inherit' }} />
        </button>
    );
};

export default DownloadResume;
