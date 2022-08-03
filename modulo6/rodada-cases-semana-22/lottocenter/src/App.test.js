import { render, screen } from '@testing-library/react';
import App from './App';

test('Render comobox', () => {
  render(<App />);
  const linkElement = screen.getByRole("combobox");
  expect(linkElement).toBeInTheDocument();
});
