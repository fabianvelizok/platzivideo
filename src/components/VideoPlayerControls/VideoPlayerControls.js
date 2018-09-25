import PropTypes from 'prop-types';
import React from 'react';

import './VideoPlayerControls.css';

const VideoPlayerControls = props => (
  <div className="video-player-controls">
    {props.children}
  </div>
);

VideoPlayerControls.propTypes = {
  children: PropTypes.node.isRequired
};

export default VideoPlayerControls;
