import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import { PlayNumber } from './PlayNumber';

afterEach(() => {
  cleanup();
});

it('should render nine buttons', () => {
  const { getByTestId } = render(<PlayNumber />);

  const button = getByTestId('number-button');

  expect(button).toBeDefined();
});

it('should call props.onClick when clicked', () => {
  const mockFn = jest.fn();

  const { getByTestId } = render(<PlayNumber onClick={mockFn} />);

  const button = getByTestId('number-button');

  expect(button).toBeDefined();

  fireEvent.click(button);
  expect(mockFn).toBeCalledTimes(1);
});
