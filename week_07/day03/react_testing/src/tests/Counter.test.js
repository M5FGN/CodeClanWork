import Counter from '../components/Counter'
import { render, fireEvent } from '@testing-library/react';

describe('Counter', () => {

  let container;

  beforeEach( () => {
    container = render(<Counter />);
  });

  it('should have a counter equal to 0', () => {
    expect(container.getByTestId('counter')).toHaveTextContent("0");
  });
  
  it('increments counter', () => {
    const incrementButton = container.getByTestId('button-up');
    fireEvent.click(incrementButton);
    expect(container.getByTestId('counter')).toHaveTextContent("1");
  });
  
  it('decrements counter', () => {
    const decrementButton = container.getByTestId('button-down');
    fireEvent.click(decrementButton);
    expect(container.getByTestId('counter')).toHaveTextContent("-1")
  });
});
