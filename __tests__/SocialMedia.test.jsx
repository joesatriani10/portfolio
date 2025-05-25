import { render, screen } from '@testing-library/react';
import SocialMedia from '@/app/components/social-media/social-media';

jest.mock('@mui/material', () => {
    const actual = jest.requireActual('@mui/material');
    return {
        ...actual,
        useMediaQuery: jest.fn(), // mockeable ahora
    };
});

import { useMediaQuery } from '@mui/material';

describe('SocialMedia', () => {
    it('renders all social media links (desktop)', () => {
        useMediaQuery.mockReturnValue(false); // desktop
        render(<SocialMedia />);
        expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Youtube/i)).toBeInTheDocument();
    });

    it('renders correctly on mobile screen', () => {
        useMediaQuery.mockReturnValue(true); // mobile
        render(<SocialMedia />);
        expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
    });
});
