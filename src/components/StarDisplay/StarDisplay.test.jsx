import { render } from '@testing-library/react';
import React from 'react';
import { Game } from '../Game';

it('should render with between one and nine stars', () => {
  const { getAllByTestId } = render(<Game />);

  const star = getAllByTestId('star');

  expect(star).toBeDefined();
  expect(star.length).toBeGreaterThan(1);
  expect(star.length).toBeLessThanOrEqual(9);
});
