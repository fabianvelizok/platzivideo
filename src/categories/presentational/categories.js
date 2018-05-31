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
        props.search.size > 0 && <div className="searchResults">
          {
            props.search.map((item) => {
              return <Media {...item.toJS()} key={item.get('id')} />
            })
          }
        </div>
      }

      {
        props.categories.map((category) => {
          return <Category
            {...category.toJS()}
            key={category.get('id')}
            handleClick={props.handleClick}
          />
        })
      }
    </div>
  );
}

export default Categories;
