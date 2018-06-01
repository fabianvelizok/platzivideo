import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from '../presentational/media';
import { openModal } from '../../actions';

class MediaContainer extends Component {
  handleOpenModal = (mediaId) => {
    this.props.openModal(mediaId);
  };

  render() {
    return (
      <Media
        handleOpenModal={this.handleOpenModal}
        {...this.props.data.toJS()} />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    data: state.getIn(['data', 'entities', 'mediaFiles', props.id]),
  };
}

const mapDispatchToProps = {
  openModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);
