import { render, screen } from '@testing-library/react';
import Projects from '@/app/components/projects/projects';

describe('Projects', () => {
    it('renders the section title', () => {
        render(<Projects />);
        const title = screen.getByText(/Projects/i);
        expect(title).toBeInTheDocument();
    });

    it('renders all project cards', () => {
        render(<Projects />);
        const expectedProjects = [
            /Speed of Bytes/i,
            /MERN Full Stack/i,
            /Futuristic Login/i,
            /CJ DATA INC Website/i,
            /Food App/i,
            /Image Recognition/i,
        ];

        expectedProjects.forEach((name) => {
            expect(screen.getByText(name)).toBeInTheDocument();
        });
    });

    it('renders all project images with links', () => {
        render(<Projects />);
        const links = screen.getAllByRole('link');
        // Should match number of projects (6)
        expect(links.length).toBeGreaterThanOrEqual(6);
    });
});
