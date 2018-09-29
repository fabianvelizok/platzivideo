import React from 'react';

import './ProgressBar.css';

const ProgressBar = (props) => (
  <div className="progress-bar">
    <input
      className="progress-bar__field"
      max={props.duration}
      min={0}
      onChange={props.handleChange}
      type="range"
      value={props.value}
    />
  </div>
);

export default ProgressBar;
