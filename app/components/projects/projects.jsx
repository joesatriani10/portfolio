'use client';
import '../../global.css';
import styles from './projects.module.css';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

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
        image: '/images/sicar.webp',//
        demo: 'https://storage.googleapis.com/credible-cab-5917/installers/setupSICARv4.0R190630_MySQL5.6_Online_DA.exe',
        code: null,
    },
    {
        title: 'SICAR Installer (MacOs)',
        technologies: ['Java', 'Bash script'],
        image: '/images/sicar-mac.webp',
        demo: 'https://storage.googleapis.com/credible-cab-5917/installers/SICARv4.0R190630_Online_DA_x64N.dmg',
        code: null,
    },
    {
        title: 'SICAR Installer (Linux)',
        technologies: ['Java', 'Bash script'],
        image: '/images/sicar-linux.webp',
        demo: 'https://storage.googleapis.com/credible-cab-5917/installers/SICAR-Online_4.0_amd64.deb',
        code: null,
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
        demo: 'https://github.com/joesatriani10/Image-Recognition',
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
                        <a
                            key={index}
                            href={project.demo || project.code}
                            className={styles.card}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2>
                                {project.title}
                                {!project.code ? (
                                    <WebOutlinedIcon sx={{ fontSize: 20, ml: '0.5rem' }} />
                                ) : (
                                    <GitHubIcon sx={{ fontSize: 20, ml: '0.5rem' }} />
                                )}
                            </h2>
                            <h5>[{project.technologies.join(', ')}]</h5>
                            <Image
                                className={styles.image}
                                src={project.image}
                                alt={`Preview of ${project.title}`}
                                layout="responsive"
                                objectFit="cover"
                                width={3900}
                                height={2512}
                                quality={70}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;