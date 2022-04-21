import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const app = TestRenderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
