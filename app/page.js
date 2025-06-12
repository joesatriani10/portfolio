import Header from "@/app/components/header/header";
import Profile from "@/app/components/profile/profile";
import Footer from "@/app/components/footer/footer";
import Divider from "@/app/components/divider/divider";

export default function Home() {
    return (
        <main className="bg-gray-900 text-white">
            <div className="p-8 max-w-4xl mx-auto">
                <Header />
                <Profile />
            </div>
        </main>
    );
}