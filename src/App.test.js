import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world title', () => {
  render(<App />);
  const appTitle = screen.getByText(/Hello World! Welcome to React JS./i);
  expect(appTitle).toBeInTheDocument();
});
