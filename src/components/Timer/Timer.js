import PropTypes from 'prop-types';
import React from 'react';

import './Timer.css';

const Timer = props => (
  <div className="timer">
    {props.currentTime} / {props.duration}
  </div>
);

Timer.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
};

Timer.defaultProps = {
  currentTime: 0,
  duration: 0
};

export default Timer;
