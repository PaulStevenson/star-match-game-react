import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import { Game } from './Game';
import { useGameState } from './useGameState';

jest.mock('./useGameState');

const mockOnClickFn = jest.fn();

let initialValues = {
  stars: 9,
  availableNums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  candidateNums: [],
  secondsLeft: 10,
  setGameState: mockOnClickFn,
};

describe('Game', () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
    initialValues = {
      stars: 9,
      availableNums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      candidateNums: [],
      secondsLeft: 10,
      setGameState: mockOnClickFn,
    };
  });

  it('should render', () => {
    useGameState.mockReturnValue(initialValues);

    const { getByTestId } = render(<Game startNewGame={1} />);

    const game = getByTestId('game');
    expect(game).toBeDefined();
  });

  it('should render nine numerical buttons', () => {
    useGameState.mockReturnValue(initialValues);

    const { getAllByTestId } = render(<Game startNewGame={1} />);
    const numberButtons = getAllByTestId('number-button');

    expect(numberButtons.length).toEqual(9);
    expect(
      numberButtons.every(
        button => button.style.backgroundColor === 'lightgray',
      ),
    ).toBe(true);
  });

  it('should set gameStatus to won', () => {
    useGameState.mockReturnValue(initialValues);
    initialValues.availableNums = [];
    initialValues.candidateNums = [];
    initialValues.secondsLeft = 0;

    const { getByTestId } = render(<Game />);

    const playAgainMessage = getByTestId('play-again-message');
    expect(playAgainMessage.textContent).toBe('Nice');
  });

  it('should set the gameStatus to lost', () => {
    useGameState.mockReturnValue(initialValues);
    initialValues.secondsLeft = 0;

    const { getByTestId } = render(<Game />);

    const playAgainMessage = getByTestId('play-again-message');
    expect(playAgainMessage.textContent).toBe('Game Over');
  });

  it('should set a numberStatus to Wrong', () => {
    useGameState.mockReturnValue(initialValues);
    initialValues.stars = 5;
    initialValues.candidateNums = [9];

    const { getAllByTestId } = render(<Game />);

    const numberButtons = getAllByTestId('number-button');
    const buttonNine = numberButtons[8];

    expect(buttonNine.style.backgroundColor).toBe('lightcoral');
  });

  it('should set a numberStatus to Candidate', () => {
    useGameState.mockReturnValue(initialValues);
    initialValues.candidateNums = [1];

    const { getAllByTestId } = render(<Game />);

    const numberButtons = getAllByTestId('number-button');
    const buttonOne = numberButtons[0];

    expect(buttonOne.style.backgroundColor).toBe('deepskyblue');
  });

  it('should call setStateGame when the candidate`s status is available', () => {
    useGameState.mockReturnValue(initialValues);
    initialValues.stars = 5;
    initialValues.availableNums = [1, 4];

    const { getAllByTestId } = render(<Game />);

    const numberButtons = getAllByTestId('number-button');

    const buttonOne = numberButtons[0];
    expect(buttonOne.style.backgroundColor).toBe('lightgray');

    fireEvent.click(buttonOne);
    expect(mockOnClickFn).toBeCalledTimes(1);
  });

  it('should prevent calling setStateGame when the candidate`s status is used', () => {
    useGameState.mockReturnValue(initialValues);
    initialValues.stars = 5;
    initialValues.availableNums = [5];

    const { getAllByTestId } = render(<Game />);

    const numberButtons = getAllByTestId('number-button');

    const buttonOne = numberButtons[0];
    expect(buttonOne.style.backgroundColor).toBe('lightgreen');

    fireEvent.click(buttonOne);
    expect(mockOnClickFn).toBeCalledTimes(0);
  });
});
