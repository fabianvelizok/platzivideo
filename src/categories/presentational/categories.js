import React from 'react';
import Category from './category';
import Search from '../../search/container/search';
import MediaContainer from '../../playlist/container/media-container';
import './categories.css';

function Categories(props) {
  return (
    <div className="Categories">
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
