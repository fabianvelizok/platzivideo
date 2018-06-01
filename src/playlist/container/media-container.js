import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from '../presentational/media';
import { openModal } from '../../actions';

class MediaContainer extends Component {
  openModal = (mediaId) => {
    this.props.dispatch(openModal(mediaId));
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
