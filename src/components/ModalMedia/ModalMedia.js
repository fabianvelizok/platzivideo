import React from 'react';

import './ModalMedia.css';

const MediaModal = props => {
  return (
    <div className="modal-media">
      <button
        className="modal-media__close"
        onClick={props.handleClick}
      >
        X
      </button>
      {props.children}
    </div>
  );
};

export default MediaModal;
