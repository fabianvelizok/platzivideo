import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import './Spinner.css';

const Spinner = props => (
  <Fragment>
    { props.show && (
      <div className="spinner">
        <span className="spinner__loader"></span>
      </div>
    )}
  </Fragment>
);

Spinner.propTypes = {
  show: PropTypes.bool
};

Spinner.defaultProps = {
  show: false
};

export default Spinner;
