import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }

  togglePlay() {
    this.props.pause ? this.video.play() : this.video.pause();
  }

  setRef = (element) => {
    this.video = element;
  }

  render() {
    return (
      <div className="Video">
        <video
          ref={this.setRef}
          autoPlay={this.props.autoplay}
          src={this.props.src}
          onLoadedMetadata={this.props.handleLoadedMetadata}
        />
      </div>
    );
  }
}

export default Video;
