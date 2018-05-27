import React, { Component } from 'react';
import VideoPlayerLayout from '../presentational/video-player-layout';
import Video from '../presentational/video';
import VideoTitle from '../presentational/video-title';
import PlayPause from '../../play-pause/presentational/play-pause';
import Timer from '../../timer/presentational/timer';
import Controls from '../../video-player-controls/presentational/video-player-controls';
import { formatTime } from '../../utils/list';
import ProgressBar from '../../progress-bar/presentational/progress-bar';
import Spinner from '../../spinner/presentational/spinner';
import Volume from '../../volume/presentational/volume';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    prevVolumeValue: 0,
    volumeValue: 1,
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
    });
  }

  handleTimeUpdate = (event) => {
    this.setState({
      currentTime: this.video.currentTime
    });
  }

  handleProgressChange = (event) => {
    this.video.currentTime = event.target.value;
  }

  handleSeeking = (event) => {
    this.setState({
      loading: true
    });
  }

  handleSeeked = (event) => {
    this.setState({
      loading: false
    });
  }

  handleVolumeChange = (event) => {
    const volumeValue = event.target.value;

    this.setState({ volumeValue });
    this.video.volume = volumeValue;
  }

  handleVolumeIconClick = (event) => {
    const newVolumeValue = this.state.volumeValue === 0 ?
      this.state.prevVolumeValue : 0;

    this.setState({
      prevVolumeValue: this.state.volumeValue,
      volumeValue: newVolumeValue,
    });

    this.video.volume = newVolumeValue;
  }

  render() {
    return (
      <VideoPlayerLayout>
        <VideoTitle
          title="Hola Mundo"
        />
        <Spinner loading={this.state.loading} />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer
            duration={formatTime(this.state.duration)}
            currentTime={formatTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleChange={this.handleProgressChange}
          />
          <Volume
            value={this.state.volumeValue}
            handleChange={this.handleVolumeChange}
            handleClick={this.handleVolumeIconClick}
          />
        </Controls>
        <Video
          pause={this.state.pause}
          autoplay={true}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
