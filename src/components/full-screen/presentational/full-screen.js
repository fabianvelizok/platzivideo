import React from 'react';

import { FullScreen as FullScreenIcon } from 'Components/icons/presentational/list';

import './full-screen.css';

const FullScreen = (props) => (
  <button
    className="FullScreen"
    onClick={props.handleClick}
  >
    <FullScreenIcon
      color="white"
      size={25}
    />
  </button>
);

export default FullScreen;
