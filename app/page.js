import Projects from "@/app/components/projects";
import Header from "@/app/components/header";
import Profile from "@/app/components/profile";
import Skills from "@/app/components/skills";
import Experience from "@/app/components/experience";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <main className="p-8 max-w-4xl mx-auto bg-gray-900 text-white">
            <Header/>
            <Profile/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Footer/>
        </main>
    );
}