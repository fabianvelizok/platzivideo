import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const activeStyle = {color: '#000'};

  return (
    <ul className="Navbar">
      <li><NavLink to="/" exact activeClassName="activeNavItem">Home</NavLink></li>
      <li><NavLink to="/about" exact activeClassName="activeNavItem">About</NavLink></li>
    </ul>
  );
}

export default Navbar;
