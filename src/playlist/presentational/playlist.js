import React from 'react';
import MediaContainer from '../container/media-container';
import './playlist.css';

// Functional component: No lifecycle.
function Playlist(props) {
  return (
    <div className="Playlist">
      <div>
        {props.playlist.map((mediaFileId) => {
          return <MediaContainer
            id={mediaFileId}
            key={mediaFileId}
          />
        })}
      </div>
    </div>
  );
}

export default Playlist;
