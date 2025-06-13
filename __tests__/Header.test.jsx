import { render, screen } from '@testing-library/react';
import Header from '@/app/components/header/header';

describe('Header', () => {
    it('renders the main', () => {
        render(<Header />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Angel Montes de Oca/i);
    });

    it('renders social media links', () => {
        render(<Header />);

        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThanOrEqual(3);

        expect(links[0]).toHaveAttribute('href', expect.stringContaining('/'));
        // TODO: Add Navigation
        expect(links[5]).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
        expect(links[6]).toHaveAttribute('href', expect.stringContaining('github.com'));
        expect(links[7]).toHaveAttribute('href', expect.stringContaining('youtube.com'));
        // TODO: Add Separator
        // TODO: Add Color Mode
    });

    it('renders the theme toggle button', () => {
        render(<Header />);
        const button = screen.getByRole('button', { name: /toggle dark mode/i });
        expect(button).toBeInTheDocument();
    });
});
