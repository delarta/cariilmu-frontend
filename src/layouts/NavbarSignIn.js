import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container } from 'reactstrap';

import logo from "../assets/img/logo_light_inline.png";
import avatar from "../assets/img/thinking.svg";

import { Link } from 'react-router-dom';

class NavbarSignIn extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      scroll: 0
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    window.onscroll = () => {
      if (window.innerWidth > 768) {
        if (window.pageYOffset >= 60) {
          document.querySelector(
            ".navbar.navbar-expand-md.navbar-dark"
          ).style.minHeight = "5vh";
          document.querySelector(
            ".navbar.navbar-expand-md.navbar-dark"
          ).style.backgroundColor = "#233142";
        } else {
          document.querySelector(
            ".navbar.navbar-expand-md.navbar-dark"
          ).style.minHeight = "10vh";
          document.querySelector(
            ".navbar.navbar-expand-md.navbar-dark"
          ).style.backgroundColor = "transparent";
        }
      }
    };
    return (
      <Navbar dark expand="md">
          <Link className="navbar-brand" to="/">
            <img style={{ width: "150px" }} src={logo} alt={logo} />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/class' className="nav-link">
                  Classes
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Name
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to='/profile' className="dropdown-item">
                    <img src={avatar} alt={avatar}/>
                  </Link>
                  <Link to='/profile' className="dropdown-item disabled">
                    Nama
                  </Link>
                  <DropdownItem divider />
                  <Link to='/schedule' className="dropdown-item">
                    Schedule
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                
                
              </NavItem>
            </Nav>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavbarSignIn;
