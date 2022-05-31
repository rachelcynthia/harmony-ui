import React from 'react';
import TestRenderer from 'react-test-renderer';

import Register from './Register';

it('renders correctly', () => {
    const login = TestRenderer.create(<Register />).toJSON();
    expect(login).toMatchSnapshot();
});