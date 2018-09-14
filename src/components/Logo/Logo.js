import { NavLink } from 'react-router-dom';
import React from 'react';

import './Logo.css';

const Logo = props => (
  <NavLink
    className="logo"
    exact
    to="/"
  ></NavLink>
);

export default Logo;
