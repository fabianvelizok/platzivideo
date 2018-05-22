import React from 'react';
import Category from './category';

function Categories(props) {
  return (
    <div>
      {
        props.categories.map((category) => {
          return <Category {...category} key={category.id} />
        })
      }
    </div>
  );
}

export default Categories;
