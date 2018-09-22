import { connect } from 'react-redux';
import React, { Component } from 'react';

import { openModal } from 'State/actions';
import Media from 'Components/Media/Media';

class MediaContainer extends Component {
  handleOpenModal = mediaId => {
    this.props.openModal(mediaId);
  };

  render() {
    return (
      <Media
        handleOpenModal={this.handleOpenModal}
        {...this.props.data.toJS()}
      />
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
