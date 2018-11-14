import React from 'react';
import App from './App';

it('renders the text -Enter Item- to show', () => {
  const { getByText } = render(<App />);
  expect(getByText('Enter Item')).toBeInTheDOM();
});

test('')
