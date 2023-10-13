import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App id='1' />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
