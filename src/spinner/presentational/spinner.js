import React from 'react';
import './spinner.css';

const Spinner = (props) => (
  <div className="Spinner">
    { props.loading && <span>Loading...</span> }
  </div>
);

export default Spinner;
