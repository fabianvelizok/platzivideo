import React from 'react';
import './progress-bar.css';

const ProgressBar = (props) => (
  <div className="ProgressBar">
    <input
      type="range"
      min={0}
      max={props.duration}
      onChange={props.handleChange}
      value={props.value}
    />
  </div>
);

export default ProgressBar;
