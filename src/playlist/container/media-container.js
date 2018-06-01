import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from '../presentational/media';

class MediaContainer extends Component {
  openModal = (mediaId) => {
    this.props.dispatch({
      type: 'OPEN_MODAL',
      payload: { mediaId },
    });
  };

  render() {
    return (
      <Media
        openModal={this.openModal}
        {...this.props.data.toJS()} />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.getIn(['data', 'entities', 'mediaFiles', props.id]),
  };
}

export default connect(mapStateToProps)(MediaContainer);
