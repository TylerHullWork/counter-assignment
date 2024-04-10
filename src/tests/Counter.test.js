// import necessary react testing library helpers here
// import the Counter component here

import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
	const counterMessage = screen.getByText('Counter');
 	expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
	expect(screen.getByText('0')).toBeInTheDocument()
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
	fireEvent.click(screen.getByText('+'));
	expect(screen.getByText('1')).toBeInTheDocument()
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
	fireEvent.click(screen.getByText('-'));
	expect(screen.getByText('-1')).toBeInTheDocument()
});
