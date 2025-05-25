import { render, screen } from '@testing-library/react';
import Skills from '@/app/components/skills/skills';

describe('Skills', () => {
    it('renders the section header', () => {
        render(<Skills />);
        const header = screen.getByText(/Skills & Technologies/i);
        expect(header).toBeInTheDocument();
    });

    it('renders all skill category subtitles', () => {
        render(<Skills />);
        const categories = [
            /Programming/i,
            /Frontend/i,
            /Backend/i,
            /Databases/i,
            /Security & DevOps/i,
            /Cloud & Infrastructure/i,
            /Software Design/i
        ];

        categories.forEach((category) => {
            expect(screen.getByText(category)).toBeInTheDocument();
        });
    });

    it('renders some individual skills', () => {
        render(<Skills />);
        const sampleSkills = [
            /C#/i,
            /ReactJS/i,
            /Next.js/i,
            /JWT/i,
            /AWS S3/i,
            /System Design/i,
        ];

        sampleSkills.forEach((skill) => {
            expect(screen.getByText(skill)).toBeInTheDocument();
        });
    });
});
