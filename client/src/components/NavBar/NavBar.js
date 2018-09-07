import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => (
  <header className="nav">
    <Link to="/">{props.title}</Link>
  </header>
);

export default NavBar;
