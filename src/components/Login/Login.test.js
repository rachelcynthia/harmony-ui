import React from 'react';
import TestRenderer from 'react-test-renderer';

import Login from './Login';

it('renders correctly', () => {
    const login = TestRenderer.create(<Login />).toJSON();
    expect(login).toMatchSnapshot();
});