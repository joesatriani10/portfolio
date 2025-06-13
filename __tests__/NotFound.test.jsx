import { render, screen } from '@testing-library/react';
import NotFound from '@/app/not-found';

describe('NotFound page', () => {
    it('renders a friendly message', () => {
        render(<NotFound />);
        const text = screen.getByText(/sorry, the page you are looking for could not be found/i);
        expect(text).toBeInTheDocument();
    });

    it('links back to the home page', () => {
        render(<NotFound />);
        const link = screen.getByRole('link', { name: /go back home/i });
        expect(link).toHaveAttribute('href', '/');
    });

    it('displays a cyber bar decoration', () => {
        const { container } = render(<NotFound />);
        const bar = container.querySelector('.cyberBar');
        expect(bar).toBeInTheDocument();
    });
});
