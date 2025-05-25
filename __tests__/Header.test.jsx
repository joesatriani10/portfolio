import { render, screen } from '@testing-library/react';
import Header from '@/app/components/header/header';

describe('Header', () => {
    it('renders the main title and subtitle', () => {
        render(<Header />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Angel Montes de Oca/i);
        expect(screen.getByText(/Full Stack Developer/i)).toBeInTheDocument();
    });

    it('renders social media links', () => {
        render(<Header />);

        const links = screen.getAllByRole('link');
        expect(links.length).toBeGreaterThanOrEqual(3);

        expect(links[0]).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
        expect(links[1]).toHaveAttribute('href', expect.stringContaining('github.com'));
        expect(links[2]).toHaveAttribute('href', expect.stringContaining('youtube.com'));
    });
});
