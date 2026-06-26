import { projects } from '@/app/lib/data';

export default function Projects() {
    return (
        <section id="projects" className="sectionBlock sectionLight">
            <div className="sectionWrap">
                <div className="sectionHeader centerHeader">
                    <h2>Featured Projects</h2>
                    <p>A selection of production apps, internal tools, installers, and product experiments.</p>
                </div>
                <div className="projectsGrid">
                    {projects.map((project) => (
                        <article className={project.featured ? 'projectCard projectCardFeatured' : 'projectCard'} key={project.id}>
                            <div className="projectHeader">
                                <div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                                {project.featured && <span>Featured</span>}
                            </div>
                            <div className="projectBody">
                                <div className="techCloud">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                                <div className="projectActions">
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noreferrer">
                                            {project.isDownload ? 'Download' : project.linkLabel || 'Live'}
                                        </a>
                                    )}
                                    {project.code && (
                                        <a href={project.code} target="_blank" rel="noreferrer">Code</a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
