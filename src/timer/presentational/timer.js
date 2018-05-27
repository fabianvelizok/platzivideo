import React from 'react';
import './timer.css';

const Timer = (props) => (
  <div className="Timer">
    <p>
      00 / {props.duration}
    </p>
  </div>
);

export default Timer;
