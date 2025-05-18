import { render, screen } from '@testing-library/react';
import JobExperience from '@/app/components/job-experience/job-experience';

describe('JobExperience', () => {
    const sampleExperience = {
        title: 'Software Tech Lead',
        company: 'Calibrated Healthcare',
        location: 'Ontario, California, USA',
        dates: '11/2021 - 10/2023',
        responsibilities: [
            "Led a team of 3 developers in building a user management and Help Desk system.",
            "Developed and secured RESTful APIs using .NET and JWT authentication.",
            "Set up and maintained GitLab CI/CD pipelines, runners, and server infrastructure."
        ],
    };

    it('renders the combined header text', () => {
        render(<JobExperience {...sampleExperience} />);
        const header = screen.getByRole('heading', { level: 4 });
        expect(header).toHaveTextContent(/Software Tech Lead/);
        expect(header).toHaveTextContent(/Calibrated Healthcare/);
        expect(header).toHaveTextContent(/Ontario/);
    });

    it('renders all responsibilities', () => {
        render(<JobExperience {...sampleExperience} />);
        sampleExperience.responsibilities.forEach((task) => {
            expect(screen.getByText(task)).toBeInTheDocument();
        });
    });
});
