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
                "Served as the tech lead for a team of 3 developers for a year on a complex internal application for manage users data which also included a complete Help Desk built-in and reports.",
                "Served as a Full Stack Developer, responsible of creating the REST API and security the application.",
                "Setup and maintain the whole instance of GitLab, pipelines, runners and servers for front and back end projects."
            ]
        },
        {
            title: "Software Developer / IT Analyst",
            company: "Calibrated Healthcare",
            location: "Ontario, California, USA",
            dates: "11/2018 - 10/2021",
            responsibilities: [
                "Created a CMS and UB (Medical Forms) recognition Desktop Software using ML.Net Model Builder that lead to improve the overall performance by replacing a legacy OCR system and reduce manual batch crafting by 25%.",
                "Performed maintenance and optimization of company's legacy core operational software.",
                "Played a key role in server management, regularly monitoring health and performance of Windows and Linux VM servers and applications."
            ]
        },
        {
            title: "Software Developer",
            company: "SICAR, Punto de Venta",
            location: "Autlan, Jalisco, Mexico",
            dates: "01/2017 - 10/2018",
            responsibilities: [
                "Designed and developed robust software application installers for multiple platforms: MacOS, Windows and Linux.",
                "Design and build internal software tools to support the help desk engineers, streamlining their troubleshooting and support processes."
            ]
        }
        // Add other experiences here...
    ];

    const consultantExperiences = [
        {
            title: "Information Technology Consultant (Weekends)",
            company: "CJ DATA COM, INC.",
            location: "Downey, California, USA",
            dates: "08/2019 - Present",
            responsibilities: [
                "System administration and maintenance of Windows servers.",
                "Provided technical support to clients on-site and remotely.",
                "Designed and implemented computer infrastructure for small businesses.",
                "CCTV installation and configuration."
            ]
        },
        {
            title: "Founder / IT Consultant / Software Engineer",
            company: "Speed of Bytes, Inc.",
            location: "Rialto, California, USA",
            dates: "11/2023 - Present",
            responsibilities: [
                "Web development and design for small businesses.",
                "Desktop Development and design for small businesses.",
                "Provided technical support to clients on-site and remotely.",
            ]
        }
    ];

    return (
        <section className={`${styles.experienceContainer}`}>
            <h3 className={`${styles.experienceHeader}`}>Consultant Experience:</h3>
            {consultantExperiences.map((experience, index) => (
                <JobExperience key={index} {...experience} />
            ))}
            <h3 className={`${styles.experienceHeader}`}>Software Experience:</h3>
            {softwareExperiences.map((experience, index) => (
                <JobExperience key={index} {...experience} />
            ))}

        </section>
    );
}

export default Experience;