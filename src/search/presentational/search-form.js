import React from 'react';
import './search-form.css';

const SearchForm = (props) => (
  <div>
    <form
      className="SearchForm"
      onSubmit={props.handleSubmit}
    >
      <input
        className="SearchFormInput"
        placeholder="Search for media"
        name="search"
        ref={props.handleRef}
        type="text"
      />
    </form>
  </div>
);

export default SearchForm;
