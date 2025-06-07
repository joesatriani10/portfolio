import Projects from "@/app/components/projects/projects";
import Header from "@/app/components/header/header";
import Profile from "@/app/components/profile/profile";
import Skills from "@/app/components/skills/skills";
import Experience from "@/app/components/experience/experience";
import Footer from "@/app/components/footer/footer";
import Divider from "@/app/components/divider/divider";
import Fullpage from "@/app/components/fullpage/fullpage";

export default function Home() {
    return (
        <Fullpage>
            <section className="section bg-gray-900 text-white">
                <div className="p-8 max-w-4xl mx-auto">
                    <Header />
                    <Profile />
                </div>
            </section>
            <section className="section">
                <Divider />
                <div className="p-8 max-w-4xl mx-auto">
                    <Skills />
                </div>
            </section>
            <section className="section">
                <Divider />
                <div className="p-8 max-w-4xl mx-auto bg-white text-black">
                    <Experience />
                </div>
            </section>
            <section className="section">
                <Divider />
                <div className="p-8 max-w-4xl mx-auto bg-[#D3D3D3] text-black">
                    <Projects />
                </div>
            </section>
            <section className="section">
                <Divider />
                <div className="p-8 max-w-4xl mx-auto bg-[#D3D3D3] text-black">
                    <Footer />
                </div>
            </section>
        </Fullpage>
    );
}
