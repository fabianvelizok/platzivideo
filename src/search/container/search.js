import React, { Component } from 'react';
import SearchForm from '../presentational/search-form';
import { connect } from 'react-redux';
import { searchMedia } from '../../actions';

class Search extends Component {
  handleRef = (element) => {
    this.input = element;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // When we connect, react-redux expose the
    // 'dispatch' method as a prop.
    this.props.dispatch(searchMedia(this.input.value));
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

export default connect()(Search);
