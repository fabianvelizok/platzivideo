import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
  render() {
    return (
      <div className="Media">
        <div className="Media-cover">
          <img
            className="Media-image"
            src={this.props.image}
            alt="React"
            width="260"
            height="160"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.defaultProps = {
  author: 'Unknown',
  image: './src/images/covers/default-image.png',
};

Media.propTypes = {
  author: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio']).isRequired,
};


export default Media;
