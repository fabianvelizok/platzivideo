import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => (
  <ul className="navbar">
    <li className="navbar__item">
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        exact
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li className="navbar__item">
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/videos"
      >
        Videos
      </NavLink>
    </li>
    <li className="navbar__item">
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/profile"
      >
        Profile
      </NavLink>
    </li>
    <li className="navbar__item">
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        exact
        to="/about"
      >
        About
      </NavLink>
    </li>
    <li className="navbar__item">
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/contact"
      >
        Contact
      </NavLink>
    </li>
  </ul>
);

export default Navbar;
