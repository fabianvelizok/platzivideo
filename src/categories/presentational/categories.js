import React from 'react';
import Category from './category';
import './categories.css';

function Categories(props) {
  return (
    <div className="Categories">
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
