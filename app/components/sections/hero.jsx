import Image from 'next/image';
import { personalInfo, socialLinks } from '@/app/lib/data';

export default function Hero() {
    return (
        <section id="top" className="heroSection">
            <div className="heroGlow heroGlowOne" />
            <div className="heroGlow heroGlowTwo" />
            <div className="heroGrid sectionWrap">
                <div className="heroCopy">
                    <div className="heroIntro">
                        <p>Hello, I&apos;m</p>
                        <h1>{personalInfo.name}</h1>
                        <strong>{personalInfo.title}</strong>
                    </div>
                    <div className="mobilePortrait">
                        <Portrait />
                    </div>
                    <p className="heroHeadline">{personalInfo.headline}</p>
                    <p className="heroBio">{personalInfo.bio}</p>
                    <div className="heroActions">
                        <a className="buttonPrimary" href="#projects">View selected work</a>
                        {/* ponytail: native download keeps resume behavior without client JS. */}
                        <a className="buttonSecondary" href={personalInfo.resume} download>Download resume</a>
                    </div>
                    <div className="heroMeta">
                        <span>{personalInfo.location}</span>
                        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                        <a href={personalInfo.website} target="_blank" rel="noreferrer">angelmontesdev.com</a>
                    </div>
                    <div className="socialRow">
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.url} target="_blank" rel="noreferrer" aria-label={link.name}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="desktopPortrait">
                    <Portrait />
                </div>
            </div>
            <a className="scrollCue" href="#experience" aria-label="Scroll to experience" />
        </section>
    );
}

function Portrait() {
    return (
        <div className="heroPortraitCard">
            <Image
                src={personalInfo.avatar}
                alt={`${personalInfo.name} photo`}
                width={420}
                height={420}
                priority
                className="heroPortrait"
            />
        </div>
    );
}
