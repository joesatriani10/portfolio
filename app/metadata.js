export const metadata = {
    metadataBase: new URL('https://www.angelmontesdev.com'),
    title: {
        default: 'Angel | Personal Portfolio',
        template: '%s | Angel Portfolio',
    },
    description:
        'Angel Montes de Oca is a full-stack developer with over seven years of experience building modern web applications.',
    keywords: [
        'Angel Montes de Oca',
        'Full Stack Developer',
        'Web Developer Portfolio',
        'Next.js',
        'React',
    ],
    authors: [
        { name: 'Angel Montes de Oca', url: 'https://github.com/joesatriani10' },
    ],
    creator: 'Angel Montes de Oca',
    openGraph: {
        title: 'Angel Montes de Oca - Full Stack Developer',
        description:
            'Portfolio showcasing projects and experience in modern web technologies.',
        siteName: 'Angel Portfolio',
        url: 'https://www.angelmontesdev.com',
        images: [
            {
                url: '/images/screenshot.png',
                width: 1200,
                height: 630,
                alt: 'Angel Montes de Oca Portfolio screenshot',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Angel Montes de Oca - Full Stack Developer',
        description:
            'Portfolio showcasing projects and experience in modern web technologies.',
        images: ['/images/screenshot.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: '/',
    },
    other: {
        'linkedin:profile': 'https://www.linkedin.com/in/angel-israel-real-montes-de-oca/',
        'github:profile': 'https://github.com/joesatriani10',
    },
};
