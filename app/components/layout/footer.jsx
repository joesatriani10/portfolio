import { personalInfo, socialLinks } from '@/app/lib/data';

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <h2>{personalInfo.name}</h2>
                <p>{personalInfo.title} based in {personalInfo.location}. Building secure, reliable software for real teams.</p>
            </div>
            <div className="footerLinks" aria-label="Footer links">
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href={personalInfo.resume} download>Resume</a>
            </div>
            <div className="footerSocials">
                {socialLinks.map((link) => (
                    <a key={link.name} href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                ))}
            </div>
            <p className="copyright">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </footer>
    );
}
