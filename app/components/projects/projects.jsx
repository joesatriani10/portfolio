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
        highlight: {
            en: 'Client-ready site with fast performance and clean UX.',
        },
    },
    {
        title: 'FlipTrack Studio',
        technologies: ['Electron', 'React', 'Vite', 'SQLite', 'Material UI'],
        image: '/images/fliptrack-studio.webp',
        demo: 'https://apps.microsoft.com/detail/9pkwd640b1m7?hl=en-us&gl=US&ocid=pdpshare',
        code: null,
        linkLabel: 'Microsoft Store',
        highlight: {
            en: 'Desktop app to centralize vehicle project data and export polished reports.',
        },
    },
    {
        title: 'CJ DATA COM Website',
        technologies: ["Next.js",
            "React",
            "TypeScript",
            "Material UI"],
        image: '/images/cj-data.webp',
        demo: 'https://cjdatacom.com/',
        code: null,
        highlight: {
            en: 'Production marketing site for a data services brand.',
        },
    },
    {
        title: 'Kangen Water Paramount',
        technologies: [
            'Next.js',
            'React',
            'TypeScript',
            'Jest',
        ],
        image: '/images/kangen.webp',
        demo: 'https://thehydrationstudio.com/',
        code: null,
        highlight: {
            en: 'Polished storefront experience with modern stack.',
        },
    },
    {
        title: 'The Kidd Electric',
        technologies: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind',
            'FM',
        ],
        image: '/images/tke.webp',
        demo: 'https://the-kidd-electric.vercel.app/',
        code: null,
    },
    {
        title: 'Food App',
        technologies: ['Next.js', 'AWS', 'S3', 'RDS', 'MySQL'],
        image: '/images/food-app.webp',
        demo: 'https://food-next-js-seven.vercel.app/',
        code: 'https://github.com/joesatriani10/food-next-js',
    },
    {
        title: 'TrayX App',
        technologies: ['C#', 'WPF', '.NET 8'],
        image: '/images/trayx.webp',
        demo: null,
        code: 'https://github.com/joesatriani10/TrayX',
    },
    {
        title: 'MERN Full Stack',
        technologies: ['React.js', 'Vite', 'MongoDB', 'Express.js', 'Redux'],
        image: '/images/mern-fullstack.webp',
        demo: 'https://mern-fullstack-frontend-ten.vercel.app/',
        code: 'https://github.com/joesatriani10/mern-fullstack-admin',
    },
    {
        title: 'Image Recognition',
        technologies: ['C#', 'WinForms', '.NET 8', 'ML.NET MB'],
        image: '/images/image-recognition.webp',
        demo: null,
        code: 'https://github.com/joesatriani10/Image-Recognition',
    },
    {
        title: 'Futuristic Login',
        technologies: ['Next.js', 'CSS'],
        image: '/images/login.webp',
        demo: 'https://login-form-next-ruby.vercel.app/',
        code: 'https://github.com/joesatriani10/login-form-next',
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
        title: 'SICAR Installer (MacOs)',
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
];

const Projects = () => {
    return (
        <section className={styles.projectsSection}>
            <div className={styles.projectsContainer}>
                <div className={styles.projectsIntro}>
                    <h3 className="sectionTitle">Selected Projects</h3>
                    <p className="sectionSubtitle">
                        A mix of production apps, internal tools, and product experiments.
                    </p>
                </div>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <h2>{project.title}</h2>
                            {project.highlight && (
                                <p className={styles.highlight}>{project.highlight.en}</p>
                            )}
                            <div className={styles.techList}>
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className={styles.tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <Image
                                className={styles.image}
                                src={project.image}
                                alt={`Preview of ${project.title}`}
                                width={400}
                                height={258}
                                quality={70}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                priority={index < 3}
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
                                        <span>Download</span>
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
                                        <span>{project.linkLabel || 'Live'}</span>
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
                                        <span>Code</span>
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
