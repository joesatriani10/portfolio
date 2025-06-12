import '../../global.css';
import styles from "@/app/components/experience/experience.module.css";
import JobExperience from "@/app/components/job-experience/job-experience";

const Experience = () => {

    const softwareExperiences = [
        {
            title: "Software Tech Lead",
            company: "Calibrated Healthcare",
            location: "Ontario, California, USA",
            dates: "11/2021 - 10/2023",
            responsibilities: [
                "Led a team of 3 developers in building a user management and Help Desk system.",
                "Developed and secured RESTful APIs using .NET and JWT authentication.",
                "Set up and maintained GitLab CI/CD pipelines, runners, and server infrastructure."
            ]
        },
        {
            title: "Software Developer / IT Analyst",
            company: "Calibrated Healthcare",
            location: "Ontario, California, USA",
            dates: "11/2018 - 10/2021",
            responsibilities: [
                "Developed a CMS and medical form recognition desktop application using ML.Net,\n" +
                "reducing manual batch processing by 25%.",
                "Maintained and optimized legacy .NET (3.5 - 4.8) core applications.",
                "Managed and monitored Windows and Linux servers for application performance and\n" +
                "security."
            ]
        },
        {
            title: "Software Developer",
            company: "SICAR, Punto de Venta",
            location: "Autlan, Jalisco, Mexico",
            dates: "01/2017 - 10/2018",
            responsibilities: [
                "Built cross-platform software installers for MacOS, Windows, and Linux.",
                "Developed internal troubleshooting tools to assist the Help Desk team.",
                "Created a Java API-based portal for database optimization and maintenance."
            ]
        }
        // Add other experiences here...
    ];

    const consultantExperiences = [
        {
            title: "Information Technology Consultant (Part time)",
            company: "CJ DATA COM, INC.",
            location: "Downey, California, USA",
            dates: "08/2019 - Present",
            responsibilities: [
                "Installed and configured network infrastructures, computer systems, and security protocols.",
                "Provided technical support to clients on-site and remotely.",
                "Designed and implemented computer infrastructure for small businesses.",
                "CCTV installation and configuration.",
                "Performed hardware and software upgrades, optimizing system performance."
            ]
        },
        {
            title: "Founder / IT Consultant / Software Engineer",
            company: "Speed of Bytes, Inc.",
            location: "Rialto, California, USA",
            dates: "11/2023 - Present",
            responsibilities: [
                "Designed and developed custom web applications using C#, JavaScript, ReactJS.",
                "Provided technical consulting and troubleshooting for client software implementations.",
                "Built custom security solutions, including endpoint protection and firewall configuration.",
                "Designed, deployed, and managed IT systems, including administration and maintenance."
            ]
        }
    ];

    return (
        <section className={`${styles.experienceContainer}`}>
            <h2 className={`${styles.experienceHeader} audiowideText`}>Consultant Experience:</h2>
            {consultantExperiences.map((experience, index) => (
                <JobExperience key={index} {...experience} />
            ))}
            <h3 className={`${styles.experienceHeader} audiowideText`}>Software Experience:</h3>
            {softwareExperiences.map((experience, index) => (
                <JobExperience key={index} {...experience} />
            ))}

        </section>
    );
}

export default Experience;