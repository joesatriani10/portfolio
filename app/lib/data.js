export const personalInfo = {
    name: 'Angel Montes de Oca',
    title: 'Senior Full-Stack Engineer',
    eyebrow: 'Secure systems. Clean delivery. Production ownership.',
    headline: 'I build reliable full-stack software for teams that need momentum without chaos.',
    bio: 'Senior full-stack engineer and tech lead with 8+ years building enterprise software, including HIPAA-aligned systems. I ship end-to-end features across the SDLC and improve reliability with CI/CD, secure APIs, and pragmatic troubleshooting.',
    location: 'Rialto, CA',
    email: 'joesatriani10@gmail.com',
    website: 'https://angelmontesdev.com',
    resume: '/resume.pdf',
    avatar: '/images/angel.webp',
};

export const socialLinks = [
    { name: 'GitHub', label: 'GH', url: 'https://github.com/joesatriani10' },
    { name: 'LinkedIn', label: 'IN', url: 'https://www.linkedin.com/in/angelmontesdev/' },
];

export const experiences = [
    {
        id: 'speed-of-bytes',
        role: 'Founder / Software Engineer and IT Consultant',
        company: 'Speed of Bytes, Inc.',
        location: 'Rialto, California, USA',
        period: '11/2023 - Present',
        startDate: '2023-11-01',
        endDate: null,
        summary: 'Full-stack delivery and consulting for production web apps, secure APIs, and SQL-backed data models.',
        achievements: [
            'Delivered full-stack web apps using React, REST APIs, and SQL-backed data models, owning requirements through deployment and support.',
            'Implemented secure authentication and role-based access, API validation/logging, and production troubleshooting to keep client operations stable.',
        ],
        technologies: ['React', 'REST APIs', 'SQL', 'Authentication', 'Role-Based Access', 'Production Support'],
    },
    {
        id: 'calibrated-lead',
        role: 'Software Tech Lead',
        company: 'Calibrated Healthcare',
        location: 'Ontario, California, USA',
        period: '11/2021 - 10/2023',
        startDate: '2021-11-01',
        endDate: '2023-10-01',
        summary: 'Technical leadership for HIPAA-aligned internal platforms, secure APIs, and CI/CD delivery.',
        achievements: [
            'Led delivery of a HIPAA-aligned user management and Help Desk platform, improving onboarding/support turnaround by 30%.',
            'Built secure .NET REST APIs with JWT, validation, and structured logging, integrating relational databases and internal systems.',
            'Owned GitLab CI/CD pipelines and runners to automate builds, tests, and deployments and reduce release risk.',
        ],
        technologies: ['.NET', 'REST APIs', 'JWT', 'GitLab CI/CD', 'Relational Databases', 'HIPAA-Aligned Systems'],
    },
    {
        id: 'calibrated-developer',
        role: 'Software Developer / IT Analyst',
        company: 'Calibrated Healthcare',
        location: 'Ontario, California, USA',
        period: '11/2018 - 10/2021',
        startDate: '2018-11-01',
        endDate: '2021-10-01',
        summary: 'Application modernization, healthcare workflows, and infrastructure support in a regulated environment.',
        achievements: [
            'Developed a CMS and medical form recognition workflow using ML.NET to streamline intake while protecting PHI.',
            'Modernized legacy .NET apps and managed Windows/Linux servers with security hardening in a HIPAA environment.',
        ],
        technologies: ['.NET', 'ML.NET', 'CMS', 'Windows Server', 'Linux', 'Security Hardening'],
    },
    {
        id: 'sicar',
        role: 'Software Developer',
        company: 'SICAR Punto de Venta (POS)',
        location: 'Autlan, Jalisco, Mexico',
        period: '01/2017 - 10/2018',
        startDate: '2017-01-01',
        endDate: '2018-10-01',
        summary: 'Cross-platform installer work and internal diagnostics for POS software operations.',
        achievements: [
            'Built cross-platform installers (Windows/macOS/Linux) using Java and Inno Setup (LZMA2), improving install speed and reducing size.',
            'Developed internal diagnostic tools and a Java portal for database maintenance and performance tuning.',
        ],
        technologies: ['Java', 'Inno Setup', 'PascalScript', 'Bash', 'Batch', 'Database Maintenance'],
    },
];

export const skillGroups = [
    { name: 'Frontend', skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML/CSS', 'CSS-in-JS'] },
    { name: 'Backend', skills: ['Java', 'C#/.NET', 'REST APIs', 'JWT', 'Swagger/OpenAPI'] },
    { name: 'Data', skills: ['SQL', 'PostgreSQL', 'MS SQL Server', 'MySQL', 'Data Modeling'] },
    { name: 'DevOps', skills: ['GitLab CI/CD', 'Docker', 'Linux', 'Windows', 'AWS'] },
    { name: 'Practices', skills: ['Agile', 'SDLC', 'Code Reviews', 'Mentoring', 'QA Collaboration', 'Automated Testing'] },
];

export const projects = [
    { id: 'speed-of-bytes', title: 'Speed of Bytes', description: 'Client-ready site with fast performance and clean UX.', technologies: ['Next.js', 'React.js', 'MUI', 'EmailJS', 'tsParticles'], demo: 'https://www.speedofbytes.io/', featured: true },
    { id: 'fliptrack-studio', title: 'FlipTrack Studio', description: 'Desktop app to centralize vehicle project data and export polished reports.', technologies: ['Electron', 'React', 'Vite', 'SQLite', 'Material UI'], demo: 'https://apps.microsoft.com/detail/9pkwd640b1m7?hl=en-us&gl=US&ocid=pdpshare', linkLabel: 'Microsoft Store', featured: true },
    { id: 'cj-data', title: 'CJ DATA COM Website', description: 'Production marketing site for a data services brand.', technologies: ['Next.js', 'React', 'TypeScript', 'Material UI'], demo: 'https://cjdatacom.com/', featured: true },
    { id: 'kangen', title: 'Kangen Water Paramount', description: 'Polished storefront experience with modern stack.', technologies: ['Next.js', 'React', 'TypeScript', 'Jest'], demo: 'https://thehydrationstudio.com/', featured: true },
    { id: 'tamarindo-jalisco', title: 'Tamarindo Jalisco', description: 'Modern restaurant website built with the Next.js App Router and TypeScript.', technologies: ['Next.js', 'TypeScript', 'App Router'], demo: 'https://tamarindojalisco.mx/' },
    { id: 'food-app', title: 'Food App', description: 'Full-stack food app using cloud storage, relational data, and Next.js.', technologies: ['Next.js', 'AWS', 'S3', 'RDS', 'MySQL'], demo: 'https://food-next-js-seven.vercel.app/', code: 'https://github.com/joesatriani10/food-next-js' },
    { id: 'trayx', title: 'TrayX App', description: 'Windows utility built with C#, WPF, and .NET 8.', technologies: ['C#', 'WPF', '.NET 8'], code: 'https://github.com/joesatriani10/TrayX' },
    { id: 'mern-full-stack', title: 'MERN Full Stack', description: 'Admin-style MERN application with React, Express, MongoDB, and Redux.', technologies: ['React.js', 'Vite', 'MongoDB', 'Express.js', 'Redux'], demo: 'https://mern-fullstack-frontend-ten.vercel.app/', code: 'https://github.com/joesatriani10/mern-fullstack-admin' },
    { id: 'image-recognition', title: 'Image Recognition', description: 'Desktop ML experiment using C#, WinForms, .NET 8, and ML.NET Model Builder.', technologies: ['C#', 'WinForms', '.NET 8', 'ML.NET MB'], code: 'https://github.com/joesatriani10/Image-Recognition' },
    { id: 'futuristic-login', title: 'Futuristic Login', description: 'Polished login screen prototype with Next.js and custom CSS.', technologies: ['Next.js', 'CSS'], demo: 'https://login-form-next-ruby.vercel.app/', code: 'https://github.com/joesatriani10/login-form-next' },
    { id: 'sicar-windows', title: 'SICAR Installer (Windows)', description: 'Windows installer for SICAR POS distribution.', technologies: ['PascalScript', 'Java', 'Batch'], demo: 'https://storage.googleapis.com/credible-cab-5917/installers/setupSICARv4.0R190630_MySQL5.6_Online_DA.exe', isDownload: true },
    { id: 'sicar-mac', title: 'SICAR Installer (MacOs)', description: 'macOS installer package for SICAR POS distribution.', technologies: ['Java', 'Bash script'], demo: 'https://storage.googleapis.com/credible-cab-5917/installers/SICARv4.0R190630_Online_DA_x64N.dmg', isDownload: true },
    { id: 'sicar-linux', title: 'SICAR Installer (Linux)', description: 'Linux installer package for SICAR POS distribution.', technologies: ['Java', 'Bash script'], demo: 'https://storage.googleapis.com/credible-cab-5917/installers/SICAR-Online_4.0_amd64.deb', isDownload: true },
];
