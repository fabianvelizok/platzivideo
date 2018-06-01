import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';

// Components
import HomeLayout from '../presentational/home-layout';
import Categories from '../../categories/presentational/categories';
import Related from '../../related/presentational/related';
import Modal from '../../modal/container/modal';
import MediaModal from '../../modal/presentational/media-modal';
import HandleError from '../../errors/container/handle-error';
import VideoPlayer from '../../video-player/container/video-player';

class Home extends Component {
  // States
  state = {
    modalVisible: false,
    media: {},
  };

  // Functions
  handleOpenModal = (media) => {
    // this.setState({
    //   modalVisible: true,
    //   media,
    // });
  }

  handleCloseModal = () => {
    // this.setState({
    //   modalVisible: false,
    // });
  }

  // Lifecycle

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            handleClick={this.handleOpenModal}
            search={this.props.search}
          />
          {this.props.modalVisible && <Modal>
              <MediaModal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  media={this.props.media}
                />
              </MediaModal>
            </Modal>
          }
        </HomeLayout>
      </HandleError>
    );
  }
}

function mapStateToProps(state, props) {
  const categories = state.getIn(['data', 'categories']).map((id) => {
    return state.getIn(['data', 'entities', 'categories', id]);
  });

  const mediaFiles = state.getIn(['data', 'entities', 'mediaFiles']);

  let search = List();
  const query = state.getIn(['data', 'search']);

  if (query) {
    search = mediaFiles
      .filter((item) => {
        return item.get('title').toLowerCase().includes(query) ||
          item.get('author').toLowerCase().includes(query);
      })
      .toList();
  }

  const modal = state.get('modal');
  const mediaId = modal.get('mediaId');
  const modalVisible = modal.get('visible');

  let media = Map();

  if (mediaId) {
    const mediaMap = mediaFiles.filter(item => item.get('id') === mediaId);
    media = mediaMap.toJS()[mediaId];
  }

  return {
    categories,
    search,
    modal,
    media,
    modalVisible,
  };
}

export default connect(mapStateToProps)(Home);
