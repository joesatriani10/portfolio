import {render, screen} from '@testing-library/react';
import Profile from '@/app/components/profile/profile';

describe('Profile', () => {
    it('renders the profile section with text', () => {
        render(<Profile />);

        // verify that text its present
        const text = screen.getByText(/I'm a Full Stack Developer/i);
        expect(text).toBeInTheDocument();
    });

    it('renders the profile image', ()=>{
        render(<Profile />);

        // verify image was rendered
        const image = screen.getByRole('img', {name: /Angel Montes de Oca photo/i});
        expect(image).toBeInTheDocument();
    });


});