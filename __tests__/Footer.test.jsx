import { render, screen } from '@testing-library/react';
import Footer from '@/app/components/footer/footer';

describe('Footer', () => {
    it('renders the footer text', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        const regex = new RegExp(`© ${currentYear} Angel Montes de Oca`, 'i');
        const text = screen.getByText(regex);
        expect(text).toBeInTheDocument();
    });

    it('contains a visual divider', () => {
        render(<Footer />);
        const divider = screen.getByRole('separator');
        expect(divider).toBeInTheDocument();
    });
});
