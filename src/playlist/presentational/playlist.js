import React from 'react';
import Media from './media';
import './playlist.css';

import { Play, Pause, Volume, FullScreen } from '../../icons/presentational/list';

// Functional component: No lifecycle.
function Playlist(props) {
  return <div className="Playlist">
    <div>
      Icons
      <Play color="red" size="50" />
      <Pause color="green" />
      <Volume color="blue" />
      <FullScreen color="orange" />
    </div>
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
