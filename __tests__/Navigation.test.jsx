import { render, screen } from '@testing-library/react';
import Navigation from '@/app/components/navigation/navigation';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

describe('Navigation', () => {
    beforeEach(() => {
        usePathname.mockReturnValue('/');
    });

    it('renders all navigation links', () => {
        render(<Navigation />);
        const links = [
            /Profile/i,
            /Experience/i,
            /Projects/i,
            /Skills/i,
        ];
        links.forEach((text) => {
            expect(screen.getByText(text)).toBeInTheDocument();
        });
    });

    it('highlights the active link', () => {
        usePathname.mockReturnValue('/experience');
        render(<Navigation />);
        const activeLink = screen.getByRole('link', { name: /experience/i });
        expect(activeLink.className).toContain('active');
    });
});
