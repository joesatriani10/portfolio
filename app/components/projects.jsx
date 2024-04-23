import styles from "../page.module.css";
import css from "../components/projects.module.css";
import glow from "../glowEffect.module.css" ;
import Image from "next/image";
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import {Box} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

const Projects = () => {
    return (
        <section className={`${styles.section} ${glow.glowBlueHoverProjects}`}>
            <h1 className={css.title}>Projects</h1>
            <div className={css.grid}>
                {/*TODO: create an array to map all projects*/}
                <a href="https://food-next-js-seven.vercel.app/" className={`${css.card} ${glow.glowPinkHover}`}
                   aria-label="Link to Food App" target="_blank" rel="noopener noreferrer">
                    <h2>Food App<WebOutlinedIcon sx={{fontSize: 20, ml: '0.5rem'}}/></h2>
                    <p>[Next.js, AWS, S3, RDS, MySQL]</p>
                    <Image
                        className={css.image}
                        src={"/images/food-app.png"}
                        alt="Preview of Food App"
                        layout="responsive"
                        objectFit="cover"
                        width={350}
                        height={200}
                    />
                </a>
                <a href="https://github.com/joesatriani10/Image-Recognition"
                   className={`${css.card} ${glow.glowPinkHover}`}
                   aria-label="Link to Image Recognition" target="_blank" rel="noopener noreferrer">
                    <h2>Image Recognition<GitHubIcon sx={{fontSize: 20, ml: '0.5rem'}}/></h2>
                    <p>[C#, WinForms, Net 8, ML.NET MB]</p>
                    <Image
                        className={css.image}
                        src={"/images/image-recognition.png"}
                        alt="Preview of Image Regonition App"
                        layout="responsive"
                        objectFit="cover"
                        width={350}
                        height={200}
                    />
                </a>
                <a href="/"
                   className={`${css.card} ${glow.glowPinkHover}`}
                   aria-label="Link to speedofbytes.io" target="_blank" rel="noopener noreferrer">
                    <h2>Speed of Bytes (in Development)</h2>
                    <p>[Next.js, tbd]</p>
                    <Image
                        className={css.image}
                        src={"/images/speed-of-bytes.png"}
                        alt="Preview of Speed of Bytes website"
                        layout="responsive"
                        objectFit="cover"
                        width={350}
                        height={200}
                    />
                </a>
                <a href="/"
                   className={`${css.card} ${glow.glowPinkHover}`}
                   aria-label="Link to cjdatacom.com" target="_blank" rel="noopener noreferrer">
                    <h2>cjdatacom.com [re-design]</h2>
                    <p>[WordPress, Beaver Builder/Theme]</p>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5rem'}}>
                        <HandymanOutlinedIcon sx={{fontSize: 100}}/>
                    </Box>
                    {/*<Image*/}
                    {/*    className={css.image}*/}
                    {/*    src={}*/}
                    {/*    alt="Preview of REPLACE ME"*/}
                    {/*    layout="responsive"*/}
                    {/*    objectFit="cover"*/}
                    {/*    width={700}*/}
                    {/*    height={400}*/}
                    {/*/>*/}
                </a>
                <a href="/"
                   className={`${css.card} ${glow.glowPinkHover}`}
                   aria-label="REPLACE ME" target="_blank" rel="noopener noreferrer">
                    <h2>(Under Construction)</h2>
                    <p>[Technologies used]</p>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5rem'}}>
                        <HandymanOutlinedIcon sx={{fontSize: 100}}/>
                    </Box>
                    {/*<Image*/}
                    {/*    className={css.image}*/}
                    {/*    src={}*/}
                    {/*    alt="Preview of REPLACE ME"*/}
                    {/*    layout="responsive"*/}
                    {/*    objectFit="cover"*/}
                    {/*    width={700}*/}
                    {/*    height={400}*/}
                    {/*/>*/}
                </a>
            </div>
        </section>
    );
}

export default Projects;