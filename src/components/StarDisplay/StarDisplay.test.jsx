import { render } from '@testing-library/react';
import React from 'react';
import { StarDisplay } from './StarDisplay';

it('should render with between one and nine stars', () => {
  const { getByTestId } = render(<StarDisplay count={1} />);

  const star = getByTestId('star');

  expect(star).toBeDefined();
});
