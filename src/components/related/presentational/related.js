import React from 'react';

import Logo from 'Components/logo/presentational/logo';

import './related.css';

function Related(props) {
  return (
    <div className="Related">
      <Logo />

      <div className="playlist">
        <h2 class="playlist-heading">My Playlist</h2>
        <ol>
          <li>
            <a href="#">
              Item 1
            </a>
          </li>
          <li>
            <a href="#">
              Item 2
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Related;
