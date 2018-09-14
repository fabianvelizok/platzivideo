import PropTypes from 'prop-types';
import React from 'react';

const Icon = props => (
  <svg version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        fill={props.color}
        viewBox="0 0 32 32">
    {props.children}
  </svg>
);

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.number
};

Icon.defaultProps = {
  color: 'white',
  size: 32
};

export default Icon;
