import Hero from '@/app/components/sections/hero';
import Experience from '@/app/components/sections/experience';
import Skills from '@/app/components/sections/skills';
import Projects from '@/app/components/sections/projects';
import Contact from '@/app/components/sections/contact';
import Footer from '@/app/components/layout/footer';

export default function Home() {
    return (
        <>
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}
