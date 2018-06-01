import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

// Components
import HomeLayout from '../presentational/home-layout';
import Categories from '../../categories/presentational/categories';
import Related from '../../related/presentational/related';
import Modal from '../../modal/container/modal';
import MediaModal from '../../modal/presentational/media-modal';
import HandleError from '../../errors/container/handle-error';
import VideoPlayer from '../../video-player/container/video-player';
import { closeModal } from '../../actions';

class Home extends Component {
  // States
  state = {
    modalVisible: false,
    media: {},
  };

  handleCloseModal = () => {
    this.props.dispatch(closeModal());
  }

  // Lifecycle

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            search={this.props.search}
          />
          {this.props.modal.get('visible') && <Modal>
              <MediaModal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  mediaId={this.props.modal.get('mediaId')}
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

  let search = List();
  const query = state.getIn(['data', 'search']);

  if (query) {
    const mediaFiles = state.getIn(['data', 'entities', 'mediaFiles']);
    search = mediaFiles
      .filter((item) => {
        return item.get('title').toLowerCase().includes(query) ||
          item.get('author').toLowerCase().includes(query);
      })
      .toList();
  }

  const modal = state.get('modal');

  return {
    categories,
    search,
    modal,
  };
}

export default connect(mapStateToProps)(Home);
