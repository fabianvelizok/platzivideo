import React, { Component } from 'react';
import './media.css';
import cover from '../../images/covers/react.jpeg';
console.log(cover);

class Media extends Component {
  render() {
    return (
      <div className="Media">
        <div className="Media-cover">
          <img
            className="Media-image"
            src={cover}
            alt="React"
            width="260"
            height="160"
          />
          <h3 className="Media-title">Some title</h3>
          <p className="Media-author">Some author</p>
        </div>
      </div>
    )
  }
}

export default Media;
