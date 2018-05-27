import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

// Pure component: If props are different, then re-render it.
class Media extends PureComponent {
  handleMediaClick = () => {
    return this.props.handleClick({
      title: this.props.title,
      src: this.props.src,
    });
  }
  render() {
    const { cover, title, author, handleClick } = this.props;
    return (
      <div className="Media"
           onClick={this.handleMediaClick}
      >
        <div className="Media-cover">
          <img
            className="Media-image"
            src={cover}
            alt={title}
            width="260"
            height="160"
          />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    )
  }
}

Media.defaultProps = {
  author: 'Unknown',
  cover: './src/images/covers/default-image.png',
};

Media.propTypes = {
  author: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio']).isRequired,
};


export default Media;
