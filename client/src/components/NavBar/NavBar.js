import React from 'react';

const NavBar = props => (
  <header className="nav">
    <a href="/">{props.title}</a>
  </header>
);

export default NavBar;
