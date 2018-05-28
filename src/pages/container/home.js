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
  return {
    categories: state.data.categories
  };
}

export default connect(mapStateToProps)(Home);
