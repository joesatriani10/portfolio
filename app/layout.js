import './global.css';
import { Inter } from 'next/font/google';
import Navbar from '@/app/components/layout/navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata = {
    metadataBase: new URL('https://www.angelmontesdev.com'),
    title: {
        default: 'Angel | Personal Portfolio',
        template: '%s | Angel Portfolio',
    },
    description:
        'Angel Montes de Oca is a senior full-stack engineer and tech lead with 8+ years building enterprise software, including HIPAA-aligned systems.',
    keywords: [
        'Angel Montes de Oca',
        'Senior Full-Stack Engineer',
        'Tech Lead',
        'Full Stack Engineer',
        'Web Developer Portfolio',
        'Next.js',
        'React',
    ],
    authors: [
        { name: 'Angel Montes de Oca', url: 'https://github.com/joesatriani10' },
    ],
    creator: 'Angel Montes de Oca',
    publisher: 'Angel Montes de Oca',
    openGraph: {
        title: 'Angel Montes de Oca - Senior Full-Stack Engineer',
        description:
            'Senior full-stack engineer and tech lead with 8+ years building enterprise software, including HIPAA-aligned systems.',
        siteName: 'Angel Portfolio',
        url: 'https://www.angelmontesdev.com',
        images: [
            {
                url: '/images/angel.webp',
                width: 360,
                height: 420,
                alt: 'Angel Montes de Oca photo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Angel Montes de Oca - Senior Full-Stack Engineer',
        description:
            'Senior full-stack engineer and tech lead with 8+ years building enterprise software, including HIPAA-aligned systems.',
        images: ['/images/angel.webp'],
    },
    icons: {
        icon: '/favicon.png',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: '/',
    },
    other: {
        'linkedin:profile': 'https://www.linkedin.com/in/angelmontesdev/',
        'github:profile': 'https://github.com/joesatriani10',
    },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Angel Montes de Oca',
    url: 'https://www.angelmontesdev.com',
    image: 'https://www.angelmontesdev.com/images/angel.webp',
    jobTitle: 'Senior Full-Stack Engineer',
    worksFor: {
        '@type': 'Organization',
        name: 'Speed of Bytes, Inc.',
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rialto',
        addressRegion: 'CA',
        addressCountry: 'US',
    },
    sameAs: [
        'https://github.com/joesatriani10',
        'https://www.linkedin.com/in/angelmontesdev/',
    ],
    knowsAbout: [
        'Software Engineering',
        'React',
        'Next.js',
        '.NET',
        'Java',
        'REST APIs',
        'CI/CD',
        'Secure APIs',
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
        <body>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        {children}
        </body>
        </html>
    );
}
