import { connect } from 'react-redux';
import React, { Component } from 'react';

import { searchMedia } from 'State/actions';
import SearchForm from 'Components/Search/presentational/search-form';

class Search extends Component {
  handleRef = (element) => {
    this.input = element;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchMedia(this.input.value);
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

// We avoid calling the 'dispatch' method and importing the 'bindActionCreators' dependency on this way.
const mapDispatchToProps = {
  searchMedia,
};

export default connect(null, mapDispatchToProps)(Search);
