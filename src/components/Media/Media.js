import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import './Media.css';

class Media extends PureComponent {
  handleMediaClick = () => {
    const { handleOpenModal, id } = this.props;

    return handleOpenModal(id);
  }

  render() {
    const { cover, title, author, handleClick } = this.props;

    return (
      <div className="media"
           onClick={this.handleMediaClick}
      >
        <div className="media__cover">
          <img
            className="media__image"
            src={cover}
            alt={title}
            width="260"
            height="160"
          />
          <h3 className="media__title">{title}</h3>
          <p className="media__author">{author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  author: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio']).isRequired,
};

Media.defaultProps = {
  author: 'Unknown',
  cover: './src/images/covers/default-image.png',
};


export default Media;
