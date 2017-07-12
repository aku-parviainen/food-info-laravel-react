import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect fluid={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">{i18n.app.app_name}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default Header;


