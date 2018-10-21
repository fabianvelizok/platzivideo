import React, { Component } from 'react';

import './Video.css';

class Video extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay();
    }
  }

  togglePlay() {
    this.props.pause ? this.video.play() : this.video.pause();
  }

  setRef = element => this.video = element;

  render() {
    return (
      <div className="video">
        <video
          autoPlay={this.props.autoplay}
          className="video__item"
          onLoadedMetadata={this.props.handleLoadedMetadata}
          onSeeked={this.props.handleSeeked}
          onSeeking={this.props.handleSeeking}
          onTimeUpdate={this.props.handleTimeUpdate}
          ref={this.setRef}
          src={this.props.src}
        />
      </div>
    );
  }
}

export default Video;
