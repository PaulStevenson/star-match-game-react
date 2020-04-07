import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import { PlayNumber } from './PlayNumber';

describe('PlayNumber button', () => {
  const mockOnClickFn = jest.fn();

  const props = {
    number: 3,
    status: 'available',
    onClick: mockOnClickFn,
  };

  afterEach(() => {
    cleanup();
  });

  it('should render', () => {
    const { getByTestId } = render(<PlayNumber {...props} />);

    const button = getByTestId('number-button');

    expect(button).toBeDefined();
    expect(button.textContent).toBe('3');
    expect(button.style.backgroundColor).toBe('lightgray');
  });

  it('should call props.onClick when clicked', () => {
    const { getByTestId } = render(<PlayNumber {...props} />);

    const button = getByTestId('number-button');

    expect(button).toBeDefined();

    fireEvent.click(button);
    expect(props.onClick).toBeCalledTimes(1);
  });

  it('should be coloured lightgreen when the status is Used', () => {
    props.status = 'used';
    const { getByTestId } = render(<PlayNumber {...props} />);

    const button = getByTestId('number-button');
    expect(button).toBeDefined();
    expect(button.style.backgroundColor).toBe('lightgreen');
  });

  it('should be coloured lightcoral when the status is Wrong', () => {
    props.status = 'wrong';
    const { getByTestId } = render(<PlayNumber {...props} />);

    const button = getByTestId('number-button');
    expect(button).toBeDefined();
    expect(button.style.backgroundColor).toBe('lightcoral');
  });

  it('should be coloured deepskyblue when the status is Candidate', () => {
    props.status = 'candidate';
    const { getByTestId } = render(<PlayNumber {...props} />);

    const button = getByTestId('number-button');
    expect(button).toBeDefined();
    expect(button.style.backgroundColor).toBe('deepskyblue');
  });
});
