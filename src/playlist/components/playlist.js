import React, { Component } from 'react';
import Media from './media';
import './playlist.css';

class Playlist extends Component {
  render() {
    return <div className="Playlist">
      <div>
        <h2>{this.props.data.title}</h2>
        <h3>{this.props.data.description}</h3>
      </div>
      <div>
        {this.props.data.playlist.map((media) => {
          return <Media {...media} key={media.id} />
        })}
      </div>
    </div>;
  }
}

export default Playlist;
