import React, { Component } from 'react';
import SearchForm from '../presentational/search-form';

class Search extends Component {
  handleRef = (element) => {
    this.input = element;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value, 'submit');
  }

  render() {
    return (
      <div>
        <SearchForm
          handleRef={this.handleRef}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Search;
