import { connect } from 'react-redux';
import React, { Component } from 'react';

import { formatTime } from 'Utils/list';
import * as selectors from 'Selectors';
import Controls from 'Components/VideoPlayerControls/VideoPlayerControls';
import FullScreen from 'Components/FullScreen/FullScreen';
import PlayPause from 'Components/PlayPause/PlayPause';
import ProgressBar from 'Components/ProgressBar/ProgressBar';
import Spinner from 'Components/Spinner/Spinner';
import Timer from 'Components/Timer/Timer';
import Video from 'Components/VideoPlayer/presentational/video';
import VideoPlayerLayout from 'Components/VideoPlayer/presentational/video-player-layout';
import VideoTitle from 'Components/VideoPlayer/presentational/video-title';
import Volume from 'Components/Volume/Volume';

class VideoPlayer extends Component {
  state = {
    currentTime: 0,
    duration: 0,
    loading: false,
    pause: true,
    prevVolumeValue: 0,
    volumeValue: 1
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

  handleVolumeIconClick = () => {
    const newVolumeValue = this.state.volumeValue === 0 ?
      this.state.prevVolumeValue : 0;

    this.setState({
      prevVolumeValue: this.state.volumeValue,
      volumeValue: newVolumeValue,
    });

    this.video.volume = newVolumeValue;
  }

  handleFullScreenClick = () => {
    // TODO: Support cross-browser full screen.
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen();
    }
  }

  setVideoPlayerRef = (element) => {
    this.player = element;
  }

  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setVideoPlayerRef}
      >
        <VideoTitle
          title={this.props.media.get('title')}
        />
        <Spinner show={this.state.loading} />
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
          <FullScreen
            handleClick={this.handleFullScreenClick}
          />
        </Controls>
        <Video
          pause={this.state.pause}
          autoplay={true}
          src={this.props.media.get('src')}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { mediaId } = props;
  const media = selectors.mediaById(mediaId)(state);
  return { media };
};

export default connect(mapStateToProps)(VideoPlayer);
