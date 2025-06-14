import './global.css';
import { Inter } from "next/font/google";
import Divider from "@/app/components/divider/divider";
import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import CustomCursor from "@/app/components/custom-cursor/custom-cursor";
import DarkModeToggle from "@/app/components/dark-mode-toggle/dark-mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.png" type="image/png" />
        </head>
        <body className={inter.className}>
        <CustomCursor />
        <Header />
        <Divider />
        <DarkModeToggle />
        {children}
        <Divider />
        <div className="p-8 max-w-4xl mx-auto bg-[#D3D3D3] text-black">
            <Footer />
        </div>
        </body>
        </html>
    );
}
