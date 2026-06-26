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
                                <SocialIcon name={link.name} />
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

function SocialIcon({ name }) {
    if (name === 'GitHub') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.69.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.72 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.9c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 21h4V9H3v12Zm7-12h3.8v1.64h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.62c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.15 1.46-2.15 2.96V21h-4V9Z"
            />
        </svg>
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
