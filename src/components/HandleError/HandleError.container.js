import React, { Component } from 'react';

import RegularError from 'Components/Errors/RegularError';

class HandleError extends Component {
  state = {
    error: false
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true
    })
  }

  render() {
    if (this.state.error) {
      return <RegularError />
    }
    // If everything is ok, it renders app.
    return this.props.children;
  }
}

export default HandleError;
