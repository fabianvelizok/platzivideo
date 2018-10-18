import PropTypes from 'prop-types';
import React from 'react';

import './HomeLayout.css';

const HomeLayout = props => {
  const { children } = props;

  return (
    <section className="home-layout">
      {props.children}
    </section>
  );
}

HomeLayout.propTypes = {
  children: PropTypes.node
};

HomeLayout.defaultProps = {
  children: undefined
};

export default HomeLayout;
