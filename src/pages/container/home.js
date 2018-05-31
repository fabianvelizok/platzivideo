import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    this.setState({
      modalVisible: true,
      media,
    });
  }

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
    });
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
          { this.state.modalVisible && <Modal>
              <MediaModal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  media={this.state.media}
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
  // const categories = state.data.categories.map(id => state.data.entities.categories[id]);
  const categories = state.getIn(['data', 'categories']).map((id) => {
    return state.getIn(['data', 'entities', 'categories', id]);
  });

  return {
    categories,
    search: state.getIn(['data', 'search']),
  };
}

export default connect(mapStateToProps)(Home);
