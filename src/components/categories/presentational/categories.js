import React from 'react';

import MediaContainer from 'Components/playlist/container/media-container';
import Navbar from 'Pages/presentational/navbar';
import Search from 'Components/search/container/search';

import './categories.css';
import Category from './category';

function Categories(props) {
  return (
    <div className="Categories">
      <Navbar />

      <Search />

      {
        props.search.size > 0 && <div className="searchResults">
          {
            props.search.map((item) => {
              return <MediaContainer
                id={item.get('id')}
                key={item.get('id')}
              />
            })
          }
        </div>
      }

      {
        props.categories.map((category) => {
          return <Category
            {...category.toJS()}
            key={category.get('id')}
          />
        })
      }
    </div>
  );
}

export default Categories;
