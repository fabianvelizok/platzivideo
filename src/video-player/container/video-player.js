import React, { Component } from 'react';
import VideoPlayerLayout from '../presentational/video-player-layout';
import Video from '../presentational/video';
import VideoTitle from '../presentational/video-title';
import PlayPause from '../../play-pause/presentational/play-pause';
import Timer from '../../timer/presentational/timer';
import Controls from '../../video-player-controls/presentational/video-player-controls';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
  };

  togglePlay = () => {
    this.setState({
      pause: !this.state.pause
    });
  }

  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration
    })
  }

  render() {
    return (
      <VideoPlayerLayout>
        <VideoTitle
          title="Hola Mundo"
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
          />
        </Controls>
        <Video
          pause={this.state.pause}
          autoplay={true}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleLoadedMetadata={this.handleLoadedMetadata}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
