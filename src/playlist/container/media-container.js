import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from '../presentational/media';

class MediaContainer extends Component {
  render() {
    return (
      <Media {...this.props.data} />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.data.entities.mediaFiles[props.id],
  };
}

export default connect(mapStateToProps)(MediaContainer);
