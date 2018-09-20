import { connect } from 'react-redux';
import { List } from 'immutable';
import React, { Component } from 'react';

import { closeModal } from 'State/actions';
import Categories from 'Components/Categories/Categories';
import HandleError from 'Components/errors/container/handle-error';
import HomeLayout from 'Pages/presentational/home-layout';
import ModalMedia from 'Components/ModalMedia/ModalMedia';
import ModalContainer from 'Components/Modal/Modal.container';
import Related from 'Components/related/presentational/related';
import Spinner from 'Components/Spinner/Spinner';
import VideoPlayer from 'Components/video-player/container/video-player';

class Home extends Component {
  // States
  state = {
    modalVisible: false,
    media: {},
  };

  handleCloseModal = () => {
    this.props.closeModal();
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
          <Spinner show={this.props.spinner.get('show')}/>
          {this.props.modal.get('visible') && (
            <ModalContainer>
              <ModalMedia
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  mediaId={this.props.modal.get('mediaId')}
                />
              </ModalMedia>
            </ModalContainer>
          )}
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
  const spinner = state.get('spinner');

  return {
    categories,
    search,
    modal,
    spinner,
  };
}

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
