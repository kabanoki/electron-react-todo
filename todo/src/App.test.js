import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  screen.debug();
//  const linkElement = screen.getByText(/ToDoリストを書く/i);
//  expect(linkElement).toBeInTheDocument();
});
