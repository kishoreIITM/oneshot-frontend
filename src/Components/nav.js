import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class navbar extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <div className="main">
        <Navbar dark expand="md" className="fixed-top">
          <div className="container-fluid">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand href="/"><h2 className="nav-head">Oneshot</h2></NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <a className="nav-link" href='/'>Dashboard</a>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/search'> Search</NavLink>
                </NavItem>
                <NavItem>
                  <a className="nav-link" href="#footer">Contact Me</a>

                </NavItem>

              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}
