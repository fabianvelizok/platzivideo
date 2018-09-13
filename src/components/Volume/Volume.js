import PropTypes from 'prop-types';
import React from 'react';

import { Volume as VolumeIcon } from 'Components/icons/presentational/list';

import './Volume.css';

const Volume = props => (
  <div className="volume">
    <button
      className="volume__button"
      onClick={props.handleClick}
    >
      <VolumeIcon
        color={props.color}
        size={props.size}
      />
    </button>
    <div className="volume__range">
      <input
        className="volume__input"
        max={1}
        min={0}
        onChange={props.handleChange}
        step={0.05}
        type="range"
        value={props.value}
      />
    </div>
  </div>
);

Volume.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func,
  size: PropTypes.number
};

Volume.defaultProps = {
  color: 'white',
  handleClick: undefined,
  size: 25
};

export default Volume;
