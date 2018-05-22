import React, { Component } from 'react';
import HomeLayout from '../presentational/home-layout';
import { categories } from '../../api.json';

// Components
import Categories from '../../categories/presentational/categories';
import Related from '../../related/presentational/related';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Related />
        <Categories categories={categories}/>
      </HomeLayout>
    );
  }
}

export default Home;
