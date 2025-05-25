import { render, screen } from '@testing-library/react';
import Footer from '@/app/components/footer/footer';

describe('Footer', () => {
    it('renders the footer text', () => {
        render(<Footer />);
        const text = screen.getByText(/© 2025 Angel Montes de Oca/i);
        expect(text).toBeInTheDocument();
    });

    it('contains a visual divider', () => {
        render(<Footer />);
        const divider = screen.getByRole('separator');
        expect(divider).toBeInTheDocument();
    });
});
