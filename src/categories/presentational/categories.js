import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../search/container/search';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
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
