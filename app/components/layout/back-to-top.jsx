'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 520);

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a
            className={`backToTop ${isVisible ? 'backToTopVisible' : ''}`}
            href="#top"
            aria-label="Back to top"
            aria-hidden={!isVisible}
            tabIndex={isVisible ? 0 : -1}
        >
            ↑
        </a>
    );
}
