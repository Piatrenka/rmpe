import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Vebkomas link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/vebkomas/i);
  expect(linkElement).toBeInTheDocument();
});

