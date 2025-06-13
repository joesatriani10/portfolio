import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from '@/app/components/dark-mode-toggle/dark-mode-toggle';

describe('DarkModeToggle', () => {
    afterEach(() => {
        document.documentElement.classList.remove('dark');
        localStorage.clear();
    });

    it('toggles dark mode class on html element', () => {
        render(<DarkModeToggle />);
        const button = screen.getByRole('button', { name: /toggle dark mode/i });
        expect(document.documentElement.classList.contains('dark')).toBe(false);
        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(true);
        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
});
