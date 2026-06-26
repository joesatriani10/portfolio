import { personalInfo } from '@/app/lib/data';

export default function Contact() {
    return (
        <section id="contact" className="contactSection">
            <div className="contactCard">
                <h2>Get In Touch</h2>
                <p>Have a project in mind? Let&apos;s talk about how I can help.</p>
                <a className="buttonPrimary" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
        </section>
    );
}
