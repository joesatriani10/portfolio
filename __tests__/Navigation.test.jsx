import { render, screen } from '@testing-library/react';
import Navigation from '@/app/components/navigation/navigation';

describe('Navigation', () => {
    it('renders all navigation links', () => {
        render(<Navigation />);
        const links = [
            /Home/i,
            /Experience/i,
            /Projects/i,
            /Skills & Technologies/i,
        ];
        links.forEach((text) => {
            expect(screen.getByText(text)).toBeInTheDocument();
        });
    });
});
