import React from 'react';

import './VideoPlayerLayout.css';

const VideoPlayerLayout = props => (
  <div
    className="video-player-layout"
    ref={props.setRef}
  >
    {props.children}
  </div>
);

export default VideoPlayerLayout;
