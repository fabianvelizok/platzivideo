import React, { Component } from 'react';
import HomeLayout from '../presentational/home-layout';
import Categories from '../../categories/presentational/categories';
import { categories } from '../../api.json';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Categories categories={categories}/>
      </HomeLayout>
    );
  }
}

export default Home;
