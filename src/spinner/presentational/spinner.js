import React from 'react';
import './spinner.css';

const Spinner = (props) => (
  <div>
    { props.show && <div className="Spinner">
        <span className="Loader"></span>
      </div>
    }
  </div>
);

export default Spinner;
