import { render, screen } from '@testing-library/react';
import Experience from '@/app/components/experience/experience';

describe('Experience', () => {
    it('renders Consultant and Software Experience sections', () => {
        render(<Experience />);
        expect(screen.getByText(/Consultant Experience/i)).toBeInTheDocument();
        expect(screen.getByText(/Software Experience/i)).toBeInTheDocument();
    });

    it('renders a known job title from consultant experience', () => {
        render(<Experience />);
        expect(screen.getByText((content) =>
            content.includes('Information Technology Consultant')
        )).toBeInTheDocument();
    });

    it('renders a known responsibility from software experience', () => {
        render(<Experience />);
        expect(screen.getByText((content) =>
            content.includes('Led a team of 3 developers')
        )).toBeInTheDocument();
    });
});
