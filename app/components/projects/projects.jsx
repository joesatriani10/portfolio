import '../../global.css';
import styles from "./projects.module.css";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

const Projects = () => {
    return (

        <section className={styles.container}>
            <h3 className={styles.header}>Projects</h3>
            <div className={styles.grid}>
                {/*create an array to map all projects*/}
                <a href="https://www.speedofbytes.io/" className={`${styles.card} ${styles.link}`} aria-label="Link to speedofbytes.io" target="_blank" rel="noopener noreferrer">
                    <h2>Speed of Bytes<WebOutlinedIcon sx={{fontSize: 20, ml: '0.5rem'}}/></h2>
                    <h5>[Next.js]</h5>
                    <Image className={styles.image} src={"/images/speed-of-bytes.webp"} alt="Preview of Speed of Bytes website" layout="responsive" objectFit="cover" width={350} height={200}/>
                </a>
                <a href="https://login-form-next-ruby.vercel.app/" className={`${styles.card} ${styles.link}`} aria-label="Link to Login" target="_blank" rel="noopener noreferrer">
                    <h2>Futuristic Login<WebOutlinedIcon sx={{fontSize: 20, ml: '0.5rem'}}/></h2>
                    <h5>[Next.js, CSS]</h5>
                    <Image className={styles.image} src={"/images/login.webp"} alt="Preview of Login" layout="responsive" objectFit="cover" width={350} height={200}/>
                </a>
                <a href="https://cjdatacom.com/" className={`${styles.card} ${styles.link}`} aria-label="Link to cjdatacom.com" target="_blank" rel="noopener noreferrer">
                    <h2>CJ DATA INC Website<WebOutlinedIcon sx={{fontSize: 20, ml: '0.5rem'}}/></h2>
                    <h5>[WordPress, Beaver Builder/Theme]</h5>
                    <Image className={styles.image} src={"/images/cj-data.webp"} alt="Preview of Cjdatacom" layout="responsive" objectFit="cover" width={350} height={200}/>
                </a>
                <a href="https://food-next-js-seven.vercel.app/" className={`${styles.card} ${styles.link}`} aria-label="Link to Food App" target="_blank" rel="noopener noreferrer">
                    <h2>Food App<WebOutlinedIcon sx={{fontSize: 20, ml: '0.5rem'}}/></h2>
                    <h5>[Next.js, AWS, S3, RDS, MySQL]</h5>
                    <Image className={styles.image} src={"/images/food-app.webp"} alt="Preview of Food App" layout="responsive" objectFit="cover" width={350} height={200}/>
                </a>
                <a href="https://github.com/joesatriani10/Image-Recognition" className={`${styles.card} ${styles.link}`} aria-label="Link to Image Recognition" target="_blank" rel="noopener noreferrer">
                    <h2>Image Recognition<GitHubIcon sx={{fontSize: 20, ml: '0.5rem'}}/></h2>
                    <h5>[C#, WinForms, Net 8, ML.NET MB]</h5>
                    <Image className={styles.image} src={"/images/image-recognition.webp"} alt="Preview of Image Regonition App" layout="responsive" objectFit="cover" width={350} height={200}/>
                </a>
            </div>
        </section>

    );
}

export default Projects;