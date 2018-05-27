import React, { Component } from 'react';
import VideoPlayerLayout from '../presentational/video-player-layout';
import Video from '../presentational/video';
import VideoTitle from '../presentational/video-title';
import PlayPause from '../../play-pause/presentational/play-pause';
import Timer from '../../timer/presentational/timer';
import Controls from '../../video-player-controls/presentational/video-player-controls';
import { formatTime } from '../../utils/list';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: '0:00',
    currentTime: '0:00',
  };

  togglePlay = () => {
    this.setState({
      pause: !this.state.pause
    });
  }

  handleLoadedMetadata = (event) => {
    this.video = event.target;
    this.setState({
      duration: formatTime(this.video.duration)
    })
  }

  handleTimeUpdate = (event) => {
    this.setState({
      currentTime: formatTime(this.video.currentTime)
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
            currentTime={this.state.currentTime}
          />
        </Controls>
        <Video
          pause={this.state.pause}
          autoplay={true}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
