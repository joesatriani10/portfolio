'use client';
import { useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from './dark-mode-toggle.module.css';
import {Box} from "@mui/material";

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('theme');
            if (stored === 'dark') {
                document.documentElement.classList.add('dark');
                setIsDark(true);
            }
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <button
                aria-label="Toggle dark mode"
                className={styles.toggleButton}
                onClick={toggleTheme}
                type="button"
            >
                {isDark ? <LightModeIcon titleAccess="Switch to light mode" /> : <DarkModeIcon titleAccess="Switch to dark mode" />}
            </button>
        </Box>

    );
};

export default DarkModeToggle;
