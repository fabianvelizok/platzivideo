import React from 'react';
import Category from './category';
import Search from '../../search/container/search';
import Media from '../../playlist/presentational/media';
import './categories.css';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />

      {
        props.search.length > 0 && <div className="searchResults">
          {
            props.search.map((item) => {
              return <Media {...item} key={item.id} />
            })
          }
        </div>
      }

      {
        props.categories.map((category) => {
          return <Category
            {...category}
            key={category.id}
            handleClick={props.handleClick}
          />
        })
      }
    </div>
  );
}

export default Categories;
