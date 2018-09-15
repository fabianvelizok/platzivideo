import PropTypes from 'prop-types';
import React from 'react';

import Playlist from 'Components/playlist/presentational/playlist';

import './Category.css';

const Category = props => (
  <div className="category">
    <h2 className="category__title">{props.title}</h2>

    <p className="category__description">{props.description}</p>

    <Playlist playlist={props.playlist}/>
  </div>
);

Category.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  playlist: PropTypes.array
};

Category.defaultProps = {
  title: 'Empty title',
  description: 'Empty description',
  playlist: []
};

export default Category;
