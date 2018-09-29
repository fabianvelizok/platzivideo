import React from 'react';

import './Search.css';

const Search = props => (
  <form
    className="search"
    onSubmit={props.handleSubmit}
  >
    <input
      autoComplete="off"
      className="search__field"
      name="search"
      placeholder="Search for media"
      ref={props.handleRef}
      type="text"
    />
  </form>
);

export default Search;
