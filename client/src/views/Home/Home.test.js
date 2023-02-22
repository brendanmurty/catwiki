import { render, screen } from '@testing-library/react';

import Home from './Home';

test('renders loading placeholder', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
