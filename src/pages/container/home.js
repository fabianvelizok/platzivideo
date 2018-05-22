import React, { Component } from 'react';
import HomeLayout from '../presentational/home-layout';
import { categories } from '../../api.json';

// Components
import Categories from '../../categories/presentational/categories';
import Related from '../../related/presentational/related';
import Modal from '../../modal/container/modal';
import MediaModal from '../../modal/presentational/media-modal';

class Home extends Component {
  state = {
    modalVisible: false,
  };

  handleOpenModal = () => {
    this.setState({
      modalVisible: true,
    });
  }

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
    });
  }

  render() {
    return (
      <HomeLayout>
        <Related />
        <Categories categories={categories} handleClick={this.handleOpenModal}/>
        { this.state.modalVisible && <Modal>
            <MediaModal handleClick={this.handleCloseModal}>Modal</MediaModal>
          </Modal>
        }
      </HomeLayout>
    );
  }
}

export default Home;
