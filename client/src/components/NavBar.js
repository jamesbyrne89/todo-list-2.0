import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const NavBar = () => (
  <Navbar className="nav" brand="Todo List 2.0" right>
    <NavItem className="nav__item" onClick={() => console.log('test click')}>Getting started</NavItem>
  </Navbar>
);

export default NavBar;
