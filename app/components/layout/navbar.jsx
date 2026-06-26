'use client';

import { useState } from 'react';
import { personalInfo } from '@/app/lib/data';

const links = [
    { href: '#top', label: 'Home' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar" aria-label="Primary navigation">
            <a className="brandMark" href="#top" onClick={() => setIsOpen(false)}>
                <span className="brandInitials" aria-hidden="true">AM</span>
                <span className="srOnly">{personalInfo.name} - Home</span>
            </a>
            <div className="navLinks">
                {links.map((link) => (
                    <a key={link.href} href={link.href}>{link.label}</a>
                ))}
                <a className="navContact" href="#contact">Contact</a>
            </div>
            <button
                className="menuButton"
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                onClick={() => setIsOpen((open) => !open)}
            >
                {isOpen ? 'Close' : 'Menu'}
            </button>
            {isOpen && (
                <div className="mobileNav" id="mobile-nav">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
                    ))}
                </div>
            )}
        </nav>
    );
}
