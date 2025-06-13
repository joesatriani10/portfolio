import { render, screen } from '@testing-library/react';
import Header from '@/app/components/header/header';

describe('Header', () => {
    it('renders the main', () => {
        render(<Header />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Angel Montes de Oca/i);
    });

    it('does not include social media links', () => {
        render(<Header />);
        const links = screen.queryAllByRole('link', { name: /linkedin|github|youtube/i });
        expect(links.length).toBe(0);
    });
});
