import React from 'react';
import Playlist from '../../playlist/presentational/playlist';

function Category(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Playlist
        playlist={props.playlist}
      />
    </div>
  );
}

export default Category;
