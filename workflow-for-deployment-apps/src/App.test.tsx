import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn', () => {
  render(<App />);
  const headerElement = screen.getByText(/Hello World/i);
  expect(headerElement).toBeInTheDocument();
});
