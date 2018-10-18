import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const activeStyle = {color: '#000'};

  return (
    <ul className="Navbar">
      <li><NavLink to="/" exact activeClassName="activeNavItem">Home</NavLink></li>
      <li><NavLink to="/videos" activeClassName="activeNavItem">Videos</NavLink></li>
      <li><NavLink to="/profile" activeClassName="activeNavItem">Profile</NavLink></li>
      <li><NavLink to="/about" activeClassName="activeNavItem">About</NavLink></li>
      <li><NavLink to="/contact" activeClassName="activeNavItem">Contact</NavLink></li>
    </ul>
  );
}

export default Navbar;
