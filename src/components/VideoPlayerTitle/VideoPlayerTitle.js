import React from 'react';

import './VideoPlayerTitle.css';

const VideoPlayerTitle = props => (
  <div className="video-player-title">
    <h2 className="video-player-title__item">{props.title}</h2>
  </div>
);

export default VideoPlayerTitle;
