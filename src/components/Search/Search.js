import { Prompt } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

import './Search.css';

const Search = props => (
  <form
    className="search"
    onSubmit={props.handleSubmit}
  >
    <Prompt message="Are you sure you want to leave?" when={!!props.value} />

    <input
      autoComplete="off"
      className="search__field"
      defaultValue={props.value}
      name="search"
      onChange={props.handleChange}
      placeholder="Search for media"
      type="text"
    />
  </form>
);

Search.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  value: PropTypes.string
};

Search.defaultProps = {
  handleChange: undefined,
  handleSubmit: undefined,
  value: undefined
};

export default Search;
