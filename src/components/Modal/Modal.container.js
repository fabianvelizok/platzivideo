import { createPortal } from 'react-dom';
import React, { Component } from 'react';

class modalContainer extends Component {
  render() {
    const modalContainer = document.getElementById('modal-container');
    return createPortal(this.props.children, modalContainer);
  }
}

export default modalContainer;
