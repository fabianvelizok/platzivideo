import React from 'react';

import MediaContainer from 'Components/Media/Media.container';

import './Playlist.css';

const Playlist = props => (
  <ul className="playlist">
    {props.playlist.map(mediaFileId => (
      <li key={mediaFileId}>
        <MediaContainer id={mediaFileId} />
      </li>
    ))}
  </ul>
);

export default Playlist;
