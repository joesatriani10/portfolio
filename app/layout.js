import './global.css';
import { Fraunces, Sora } from "next/font/google";
import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";

const sora = Sora({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.png" type="image/png" />
        </head>
        <body className={`${sora.variable} ${fraunces.variable}`}>
        <div className="siteShell">
            <Header />
            <main className="pageContainer">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}
