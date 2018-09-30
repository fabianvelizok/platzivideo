import React from 'react';

import Logo from 'Components/Logo/Logo';

import './Related.css';

const fakePlaylist = [
  { id: 1, label: 'Playlist 1', link: 'http://google.com'},
  { id: 2, label: 'Playlist 2', link: 'http://google.com'}
]

const Related = props => (
  <div className="related">
    <Logo />

    <div className="related__playlist">
      <h2 className="related__playlist-heading">
        My Playlist
      </h2>
      <ol className="related__playlist-items">
        {
          fakePlaylist.map(playlist => (
            <li key={playlist.id}>
              <a href={playlist.link}>{playlist.label}</a>
            </li>
          ))
        }
      </ol>
    </div>
  </div>
);

export default Related;
