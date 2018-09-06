import React from 'react';

import './media-modal.css';

function MediaModal(props) {
  return (
    <div className="MediaModal">
      <button className="MediaModalClose"
              onClick={props.handleClick}
      ></button>
      {props.children}
    </div>
  );
}

export default MediaModal;
