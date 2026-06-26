'use client';

import { useState } from 'react';
import { experiences } from '@/app/lib/data';
import { calculateDuration } from '@/app/lib/utils';

export default function Experience() {
    const [openId, setOpenId] = useState(experiences[0]?.id);

    return (
        <section id="experience" className="sectionBlock sectionLight">
            <div className="sectionWrap">
                <div className="sectionHeader">
                    <p className="eyebrow">Experience</p>
                    <h2>Leadership and delivery across the full SDLC.</h2>
                    <p>Roles focused on secure, compliant systems, pragmatic troubleshooting, and production-ready execution.</p>
                </div>
                <div className="timeline">
                    {experiences.map((experience, index) => {
                        const isOpen = openId === experience.id;
                        const side = index % 2 === 0 ? 'timelineItemLeft' : 'timelineItemRight';

                        return (
                            <article className={`timelineItem ${side}`} key={experience.id}>
                                <div className="timelineMarker">{String(index + 1).padStart(2, '0')}</div>
                                <div className="timelineCard">
                                    <div className="cardHeader">
                                        <div>
                                            <h3>{experience.role}</h3>
                                            <p>{experience.company}</p>
                                        </div>
                                        <span>{experience.period}</span>
                                    </div>
                                    <div className="metaLine"><span>{experience.location}</span></div>
                                    <span className="durationPill">{calculateDuration(experience.startDate, experience.endDate)}</span>
                                    <p className="cardSummary">{experience.summary}</p>
                                    <button
                                        className="textButton"
                                        type="button"
                                        aria-expanded={isOpen}
                                        onClick={() => setOpenId(isOpen ? null : experience.id)}
                                    >
                                        {isOpen ? 'Hide details' : 'Show key achievements'}
                                    </button>
                                    {isOpen && (
                                        <div className="detailsPanel">
                                            <ul>
                                                {experience.achievements.map((achievement) => (
                                                    <li key={achievement}>{achievement}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className="techCloud">
                                        {experience.technologies.map((tech) => (
                                            <span key={tech}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
