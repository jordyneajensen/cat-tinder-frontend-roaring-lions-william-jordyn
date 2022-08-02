import React, { Component, useState } from 'react'
// import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import lion from '../assets/lion.gif'

const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header-container">
      <Navbar {...args} className="navbar-expand">
        <NavbarBrand href="/" className="roaring-lions-header">Welcome to Roaring Lions</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/bigcatshow">Show</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/bigcatnew">Edit</NavLink>
            </NavItem>
          </Nav>
          <NavbarText><img src={lion} className="lion-gif"/></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Header