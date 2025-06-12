import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DownloadResume from '@/app/components/download-resume/download-resume';

global.fetch = jest.fn(() =>
    Promise.resolve({
        blob: () => Promise.resolve(new Blob(['resume content'], { type: 'application/pdf' })),
    })
);

describe('DownloadResume', () => {
    let originalConsoleError;
    beforeAll(() => {
        originalConsoleError = console.error;
        jest.spyOn(console, 'error').mockImplementation((msg) => {
            if (msg?.toString().includes('Not implemented: navigation')) return;
            originalConsoleError(msg);
        });
    });

    afterAll(() => {
        console.error.mockRestore();
        console.error = originalConsoleError;
    });

    beforeEach(() => {
        fetch.mockClear();
        URL.createObjectURL = jest.fn(() => 'blob:mock-resume-url');
        URL.revokeObjectURL = jest.fn();
    });

    it('renders download text', () => {
        render(<DownloadResume />);
        const downloadText = screen.getByText(/Download my resume/i);
        expect(downloadText).toBeInTheDocument();
    });

    it('calls fetch and creates download on click', async () => {
        render(<DownloadResume />);
        const downloadText = screen.getByText(/Download my resume/i);

        fireEvent.click(downloadText);

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith('/resume.pdf');
            expect(URL.createObjectURL).toHaveBeenCalled();
            expect(URL.revokeObjectURL).toHaveBeenCalled();
        });
    });
});
