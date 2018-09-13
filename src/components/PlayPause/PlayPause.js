import PropTypes from 'prop-types';
import React from 'react';

import { Play, Pause } from 'Components/icons/presentational/list';

import './PlayPause.css';

const PlayPause = props => {
  const Component = props.pause ? Pause : Play;

  return (
    <button className="play-pause" onClick={props.handleClick}>
      <Component
        size={props.size}
        color={props.color}
      />
    </button>
  );
};

PlayPause.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func,
  size: PropTypes.number
};

PlayPause.defaultProps = {
  color: 'white',
  handleClick: undefined,
  size: 25
};

export default PlayPause;
