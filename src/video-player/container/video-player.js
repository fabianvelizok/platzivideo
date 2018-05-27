import React, { Component } from 'react';
import VideoPlayerLayout from '../presentational/video-player-layout';
import Video from '../presentational/video';
import VideoTitle from '../presentational/video-title';

class VideoPlayer extends Component {
  render() {
    return (
      <VideoPlayerLayout>
        <VideoTitle
          title="Hola Mundo"
        />
        <Video
          autoplay={true}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
