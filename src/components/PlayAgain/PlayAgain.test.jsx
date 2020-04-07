import { render, prettyDOM, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { PlayAgain } from './PlayAgain';

describe('PlayAgain', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    const { getByTestId } = render(<PlayAgain />);

    const message = getByTestId('play-again-message');
    expect(message).toBeDefined();

    const button = getByTestId('play-again-button');
    expect(button).toBeDefined();
  });

  it('should have a winning message when gameStatus is won', () => {
    const { getByTestId } = render(<PlayAgain gameStatus='won' />);

    const message = getByTestId('play-again-message');
    expect(message.textContent).toBe('Nice');
    expect(message).toHaveStyle('color: green');
  });

  it('should have a winning message when gameStatus is won', () => {
    const { getByTestId } = render(<PlayAgain gameStatus='lost' />);

    const message = getByTestId('play-again-message');
    expect(message.textContent).toBe('Game Over');
    expect(message).toHaveStyle('color: red');
  });

  it('should have a button with the value Play Again', () => {
    const mockFn = jest.fn();

    const { getByTestId } = render(<PlayAgain onClick={mockFn} />);

    const button = getByTestId('play-again-button');
    expect(button.textContent).toBe('Play Again');

    fireEvent.click(button);
    expect(mockFn).toBeCalledTimes(1);
  });
});
