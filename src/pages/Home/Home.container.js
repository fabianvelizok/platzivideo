import { connect } from 'react-redux';
import { List } from 'immutable';
import React, { Component } from 'react';

import { closeModal } from 'State/actions';
import * as selectors from 'Selectors';
import Categories from 'Components/Categories/Categories';
import HandleErrorContainer from 'Components/HandleError/HandleError.container';
import HomeLayout from 'Components/HomeLayout/HomeLayout';
import ModalContainer from 'Components/Modal/Modal.container';
import ModalMedia from 'Components/ModalMedia/ModalMedia';
import Related from 'Components/Related/Related';
import Spinner from 'Components/Spinner/Spinner';
import VideoPlayer from 'Components/VideoPlayer/VideoPlayer.container';

class Home extends Component {
  state = {
    modalVisible: false,
    media: {},
  };

  handleCloseModal = () => {
    this.props.closeModal();
  }

  render() {
    const { categories, modal, spinner, search } = this.props;

    return (
      <HandleErrorContainer>
        <HomeLayout>
          <Related />
          <Categories
            categories={categories}
            search={search}
          />
          <Spinner show={spinner.get('show')}/>
          {modal.get('visible') && (
            <ModalContainer>
              <ModalMedia
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  mediaId={modal.get('mediaId')}
                />
              </ModalMedia>
            </ModalContainer>
          )}
        </HomeLayout>
      </HandleErrorContainer>
    );
  }
}

function mapStateToProps(state, props) {
  // Refactor all this function.
  const categories = selectors.denormalizedCategoriesSelector(state);

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
