import React from 'react';

import { useGameState } from './useGameState';

import { PlayAgain } from '../PlayAgain';
import { PlayNumber } from '../PlayNumber';
import { StarDisplay } from '../StarDisplay';
import { Timer } from '../Timer';

import utils from '../../utilities/Maths';

import './Game.scss';

export const Game = props => {
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
  } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const gameStatus =
    availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

  const numberStatus = number => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }

    const newCandidatesNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);

    setGameState(newCandidatesNums);
  };

  return (
    <div className='game' data-testid='game'>
      <div className='instruction' data-testid='instruction'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left' data-testid='left-side'>
          {gameStatus !== 'active' ? (
            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
          ) : (
            <StarDisplay count={stars} />
          )}
        </div>
        <div className='right' data-testid='right-side'>
          {utils.range(1, 9).map(number => (
            <PlayNumber
              key={number}
              number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <Timer remainingTime={secondsLeft} />
    </div>
  );
};
