import './global.css';
import { Inter } from "next/font/google";
import Navigation from "@/app/components/navigation/navigation";
import Divider from "@/app/components/divider/divider";
import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header />
        <Navigation />
        <Divider />
        {children}
        <Divider />
        <div className="p-8 max-w-4xl mx-auto bg-[#D3D3D3] text-black">
            <Footer />
        </div>
        </body>
        </html>
    );
}
