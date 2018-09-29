import { connect } from 'react-redux';
import React, { Component } from 'react';

import { searchMedia } from 'State/actions';
import Search from 'Components/Search/Search';

class SearchContainer extends Component {
  handleRef = element => {
    this.input = element;
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchMedia(this.input.value);
  }

  render() {
    return (
      <div>
        <Search
          handleRef={this.handleRef}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchMedia,
};

export default connect(null, mapDispatchToProps)(SearchContainer);
