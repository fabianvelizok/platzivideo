import React, { Component } from 'react';
import HomeLayout from '../presentational/home-layout';
import { categories } from '../../api.json';

// Components
import Categories from '../../categories/presentational/categories';
import Related from '../../related/presentational/related';
import Modal from '../../modal/container/modal';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Related />
        <Categories categories={categories} />
        <Modal>
          <div>Modal</div>
        </Modal>
      </HomeLayout>
    );
  }
}

export default Home;
