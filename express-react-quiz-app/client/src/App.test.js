import { render, screen } from '@testing-library/react';
import App2 from './App2';

describe('App2', () => {
  test('renders App component', () => {
    render(<App2 />);
    screen.debug();
  });
});
