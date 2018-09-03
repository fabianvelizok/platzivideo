import { NavLink } from 'react-router-dom';
import React from 'react';

import './logo.css';

function Logo(props) {
  return <NavLink to="/" exact className="Logo"></NavLink>;
}

export default Logo;
