import React from 'react';

import { Volume as VolumeIcon } from 'Components/icons/presentational/list';

import './volume.css';

const Volume = (props) => (
  <div className="Volume">
    <button
      className="VolumeButton"
      onClick={props.handleClick}
    >
      <VolumeIcon
        color="white"
        size={25}
      />
    </button>
    <div className="VolumeRange">
      <input
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  </div>
);

export default Volume;
