'use client';
import '../../global.css';
import styles from './projects.module.css';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import DownloadIcon from '@mui/icons-material/Download';

const projects = [
    {
        title: 'Speed of Bytes',
        technologies: ['Next.js', 'React.js', 'MUI', 'EmailJS', 'tsParticles'],
        image: '/images/speed-of-bytes.webp',
        demo: 'https://www.speedofbytes.io/',
        code: null,
    },
    {
        title: 'MERN Full Stack',
        technologies: ['React.js', 'Vite', 'MongoDB', 'Express.js', 'Redux'],
        image: '/images/mern-fullstack.webp',
        demo: 'https://mern-fullstack-frontend-ten.vercel.app/',
        code: null,
    },
    {
        title: 'Futuristic Login',
        technologies: ['Next.js', 'CSS'],
        image: '/images/login.webp',
        demo: 'https://login-form-next-ruby.vercel.app/',
        code: 'https://github.com/joesatriani10/login-form-next',
    },
    {
        title: 'CJ DATA INC Website',
        technologies: ['WordPress', 'Beaver Builder/Theme'],
        image: '/images/cj-data.webp',
        demo: 'https://cjdatacom.com/',
        code: null,
    },
    {
        title: 'SICAR Installer (Windows)',
        technologies: ['PascalScript', 'Java', 'Batch'],
        image: '/images/sicar.webp',
        demo: 'https://storage.googleapis.com/credible-cab-5917/installers/setupSICARv4.0R190630_MySQL5.6_Online_DA.exe',
        code: null,
        isDownload: true,
    },
    {
        title: 'SICAR Installer (MacOS)',
        technologies: ['Java', 'Bash script'],
        image: '/images/sicar-mac.webp',
        demo: 'https://storage.googleapis.com/credible-cab-5917/installers/SICARv4.0R190630_Online_DA_x64N.dmg',
        code: null,
        isDownload: true,
    },
    {
        title: 'SICAR Installer (Linux)',
        technologies: ['Java', 'Bash script'],
        image: '/images/sicar-linux.webp',
        demo: 'https://storage.googleapis.com/credible-cab-5917/installers/SICAR-Online_4.0_amd64.deb',
        code: null,
        isDownload: true,
    },
    {
        title: 'Food App',
        technologies: ['Next.js', 'AWS', 'S3', 'RDS', 'MySQL'],
        image: '/images/food-app.webp',
        demo: 'https://food-next-js-seven.vercel.app/',
        code: null,
    },
    {
        title: 'Image Recognition',
        technologies: ['C#', 'WinForms', '.NET 8', 'ML.NET MB'],
        image: '/images/image-recognition.webp',
        demo: null,
        code: 'https://github.com/joesatriani10/Image-Recognition',
    },
];

const Projects = () => {
    return (
        <section className={styles.projectsSection}>
            <div className={styles.projectsContainer}>
                <h3 className={styles.projectsHeader}>Projects</h3>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <h2>{project.title}</h2>
                            <h5>[{project.technologies.join(', ')}]</h5>
                            <Image
                                className={styles.image}
                                src={project.image}
                                alt={`Preview of ${project.title}`}
                                width={400}
                                height={258}
                                quality={70}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                priority
                            />
                            <div className={styles.links}>
                                {project.isDownload && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} download`}
                                        className={styles.iconLink}
                                    >
                                        <DownloadIcon />
                                    </a>
                                )}
                                {!project.isDownload && project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} demo`}
                                        className={styles.iconLink}
                                    >
                                        <WebOutlinedIcon />
                                    </a>
                                )}
                                {project.code && (
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} GitHub`}
                                        className={styles.iconLink}
                                    >
                                        <GitHubIcon />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
