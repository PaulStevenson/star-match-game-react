import React from 'react';

export const PlayAgain = props => (
  <div className='game-done'>
    <div
      className='message'
      data-testid='play-again-message'
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
    </div>
    <button onClick={props.onClick} data-testid='play-again-button'>
      Play Again
    </button>
  </div>
);
