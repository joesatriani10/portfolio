import Profile from "@/app/components/profile/profile";

export default function Home() {
    return (
        <main className="bg-gray-900 text-white">
            <div className="p-8 max-w-4xl mx-auto">
                <Profile />
            </div>
        </main>
    );
}