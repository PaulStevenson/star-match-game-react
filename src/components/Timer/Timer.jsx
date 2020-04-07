import React from 'react';

export const Timer = props => {
  return (
    <div className='timer' data-testid='timer'>
      Time Remaining: {props.remainingTime}
    </div>
  );
};
