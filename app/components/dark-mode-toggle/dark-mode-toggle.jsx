'use client';

import { useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from './dark-mode-toggle.module.css';
import { Box } from '@mui/material';

const DarkModeToggle = () => {
    // Read initial theme once on the client without triggering setState in an effect
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') return false;
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        // Keep DOM and localStorage in sync with the current state
        const root = document.documentElement;

        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <button
                aria-label="Toggle dark mode"
                className={styles.toggleButton}
                onClick={toggleTheme}
                type="button"
            >
                {isDark ? (
                    <LightModeIcon titleAccess="Switch to light mode" />
                ) : (
                    <DarkModeIcon titleAccess="Switch to dark mode" />
                )}
            </button>
        </Box>
    );
};

export default DarkModeToggle;
