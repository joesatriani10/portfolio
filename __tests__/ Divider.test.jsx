import { render, screen } from '@testing-library/react';
import Divider from '@/app/components/divider/divider';

describe('Divider', () => {
    it('renders the divider element', () => {
        render(<Divider />);
        const divider = screen.getByRole('separator');
        expect(divider).toBeInTheDocument();
    });
});
