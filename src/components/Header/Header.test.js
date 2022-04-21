import { render } from '@testing-library/react';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Header from './Header';

it('renders correctly', () => {
    const header = TestRenderer.create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
});

it('should not render profile pic icon when isLoggedIn is false', () => {
    const header = render(<Header isLoggedIn={false} />);
    expect(() => header.getByTestId("profile")).toThrow()
})