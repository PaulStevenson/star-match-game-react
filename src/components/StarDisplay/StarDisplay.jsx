import React from 'react';
// import utils from '../utilities/Maths';
import utils from '../../utilities/Maths';

import './StarDisplay.scss';

export const StarDisplay = props => (
  <React.Fragment>
    {utils.range(1, props.count).map(starId => (
      <div key={starId} className='star' />
    ))}
  </React.Fragment>
);
