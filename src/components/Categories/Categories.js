import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Category from 'Components/Category/Category';
import MediaContainer from 'Components/Media/Media.container';
import Navbar from 'Components/Navbar/Navbar';
import SearchContainer from 'Components/Search/Search.container';

import './Categories.css';

const Categories = props => {
  const { categories, search } = props;

  const renderSearchResults = () => (
    <Fragment>
      {
        !!search.size && (
          <ul className="categories__search-results">
            {search.map(item => {
              const id = item.get('id');

              return (
                <li key={id}><MediaContainer id={id} /></li>
              );
            })}
          </ul>
        )
      }
    </Fragment>
  );

  const renderCategories = () => (
    <Fragment>
      {
        props.categories.map(category => {
          const { description, id, playlist, title } = category.toJS();

          return (
            <Category
              key={id}
              description={description}
              playlist={playlist}
              title={title}
            />
          );
        })
      }
    </Fragment>
  );

  return (
    <div className="categories">
      <Navbar />

      <SearchContainer />

      {renderSearchResults()}

      {renderCategories()}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  search: PropTypes.array
};

Categories.defaultProps = {
  categories: [],
  search: []
};

export default Categories;
