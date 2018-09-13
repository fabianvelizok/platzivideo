import PropTypes from 'prop-types';
import React from 'react';

import { FullScreen as FullScreenIcon } from 'Components/icons/presentational/list';

import './FullScreen.css';

const FullScreen = (props) => (
  <button
    className="full-screen"
    onClick={props.handleClick}
  >
    <FullScreenIcon
      color={props.color}
      size={props.size}
    />
  </button>
);

FullScreen.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func,
  size: PropTypes.string
};

FullScreen.defaultProps = {
  color: 'white',
  handleClick: undefined,
  size: 25
};

export default FullScreen;
