import '../../global.css';
import styles from "@/app/components/experience/experience.module.css";
import JobExperience from "@/app/components/job-experience/job-experience";

const Experience = () => {

    const softwareExperiences = [

        {
            title: "Founder / Software Engineer and IT Consultant",
            company: "Speed of Bytes, Inc.",
            location: "Rialto, California, USA",
            dates: "11/2023 - Present",
            responsibilities: [
                "Delivered full-stack web apps using React, REST APIs, and SQL-backed data models, owning requirements through deployment and support.",
                "Implemented secure authentication and role-based access, API validation/logging, and production troubleshooting to keep client operations stable."
            ]
        },
        {
            title: "Software Tech Lead",
            company: "Calibrated Healthcare",
            location: "Ontario, California, USA",
            dates: "11/2021 - 10/2023",
            responsibilities: [
                "Led delivery of a HIPAA-aligned user management and Help Desk platform, improving onboarding/support turnaround by 30%.",
                "Built secure .NET REST APIs with JWT, validation, and structured logging, integrating relational databases and internal systems.",
                "Owned GitLab CI/CD pipelines and runners to automate builds, tests, and deployments and reduce release risk."
            ]
        },
        {
            title: "Software Developer / IT Analyst",
            company: "Calibrated Healthcare",
            location: "Ontario, California, USA",
            dates: "11/2018 - 10/2021",
            responsibilities: [
                "Developed a CMS and medical form recognition workflow using ML.NET to streamline intake while protecting PHI.",
                "Modernized legacy .NET apps and managed Windows/Linux servers with security hardening in a HIPAA environment."
            ]
        },
        {
            title: "Software Developer",
            company: "SICAR Punto de Venta (POS)",
            location: "Autlan, Jalisco, Mexico",
            dates: "01/2017 - 10/2018",
            responsibilities: [
                "Built cross-platform installers (Windows/macOS/Linux) using Java and Inno Setup (LZMA2), improving install speed and reducing size.",
                "Developed internal diagnostic tools and a Java portal for database maintenance and performance tuning."
            ]
        }
        // Add other experiences here...
    ];


    return (
        <section className={styles.experienceContainer}>
            <div className={styles.experienceIntro}>
                <h3 className="sectionTitle">Experience</h3>
                <p className="sectionSubtitle">
                    Roles focused on secure, compliant systems and full SDLC delivery.
                </p>
            </div>
            {softwareExperiences.map((experience, index) => (
                <JobExperience key={index} {...experience} />
            ))}

        </section>
    );
}

export default Experience;
