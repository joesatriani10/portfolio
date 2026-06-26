import { skillGroups } from '@/app/lib/data';

export default function Skills() {
    return (
        <section id="skills" className="sectionBlock sectionWhite">
            <div className="sectionWrap">
                <div className="sectionHeader centerHeader">
                    <h2>Technical Skills</h2>
                    <p>Comprehensive expertise across the full development stack.</p>
                </div>
                <div className="skillsGrid">
                    {skillGroups.map((group) => (
                        <article className="skillCard" key={group.name}>
                            <h3>{group.name}</h3>
                            <div>
                                {group.skills.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
