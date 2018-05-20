import React from 'react';
import Media from './media';
import './playlist.css';

// Functional component: No lifecycle.
function Playlist(props) {
  return <div className="Playlist">
    <div>
      <h2>{props.data.title}</h2>
      <h3>{props.data.description}</h3>
    </div>
    <div>
      {props.data.playlist.map((media) => {
        return <Media {...media} key={media.id} />
      })}
    </div>
  </div>;
}

export default Playlist;
