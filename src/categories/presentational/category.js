import React from 'react';
import Playlist from '../../playlist/presentational/playlist';
import './category.css';

function Category(props) {
  return (
    <div className="Category">
      <h2 className="CategoryTitle">{props.title}</h2>
      <p className="CategoryDescription">{props.description}</p>
      <Playlist
        playlist={props.playlist}
        handleClick={props.handleClick}
      />
    </div>
  );
}

export default Category;
