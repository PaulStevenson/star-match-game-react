import { render } from '@testing-library/react';
import React from 'react';
import { Timer } from './Timer';

describe('Timer', () => {
  it('should render', () => {
    const { getByTestId } = render(<Timer />);

    const timer = getByTestId('timer');

    expect(timer).toBeDefined();
  });
});
