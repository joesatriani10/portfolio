import './global.css';
import { Inter } from 'next/font/google';
import Divider from '@/app/components/divider/divider';
import Footer from '@/app/components/footer/footer';
import Header from '@/app/components/header/header';
import DarkModeToggle from '@/app/components/dark-mode-toggle/dark-mode-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Angel Montes | Portfolio',
    description: 'Software engineer portfolio',
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
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
