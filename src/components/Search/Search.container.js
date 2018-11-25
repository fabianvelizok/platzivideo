import { connect } from 'react-redux';
import React, { Component } from 'react';

import { searchMedia } from 'State/actions';
import Search from 'Components/Search/Search';

class SearchContainer extends Component {
  state = {
    value: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchMedia(this.state.value);
  }

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchMedia,
};

export default connect(null, mapDispatchToProps)(SearchContainer);
