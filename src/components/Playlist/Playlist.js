import React from 'react';

import MediaContainer from 'Components/Media/Media.container';

import './Playlist.css';

const Playlist = props => (
  <ul className="playlist">
    {props.playlist.map(mediaFile => {
      const { id } = mediaFile;

      return (
        <li key={id}>
          <MediaContainer id={id} />
        </li>
      );
    })}
  </ul>
);

export default Playlist;
