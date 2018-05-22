import React from 'react';
import Media from './media';
import './playlist.css';

// Functional component: No lifecycle.
function Playlist(props) {
  return <div className="Playlist">
    <div>
      {props.playlist.map((media) => {
        return <Media
          {...media}
          handleClick={props.handleClick}
          key={media.id}
        />
      })}
    </div>
  </div>;
}

export default Playlist;
