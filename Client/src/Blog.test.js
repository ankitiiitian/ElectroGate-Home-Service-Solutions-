import React from 'react';
import { render } from '@testing-library/react';
import Blog from './Blog';

test('renders learn react link', () => {
  const { getByText } = render(<Blog />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});