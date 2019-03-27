import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from "reactstrap";

import logo from "../assets/img/logo_light_inline.png";
import { Link } from "react-router-dom";

class Header extends React.Component {
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
        if (window.pageYOffset >= 100) {
          document.querySelector(
            ".navbar.navbar-expand-md.navbar-dark"
          ).style.minHeight = "10vh";
          document.querySelector(
            ".navbar.navbar-expand-md.navbar-dark"
          ).style.backgroundColor = "#3d4351";
        } else {
          document.querySelector(
            ".navbar.navbar-expand-md.navbar-dark"
          ).style.minHeight = "20vh";
          document.querySelector(
            ".navbar.navbar-expand-md.navbar-dark"
          ).style.backgroundColor = "transparent";
        }
      } else {
        document.querySelector(
          ".navbar.navbar-expand-md.navbar-dark"
        ).style.minHeight = "10vh";
      }
    };

    return (
      <Navbar dark expand="md">
        <Container>
          <Link className="navbar-brand" to="/">
            <img style={{ width: "150px" }} src={logo} alt={logo} />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <a className="nav-link" href="#banner">
                  Home
                </a>
              </NavItem>
              <NavItem>
                <a className="nav-link" href="#keunggulan">
                  Feature
                </a>
              </NavItem>
              <NavItem>
                <a className="nav-link" href="#misi">
                  Mission
                </a>
              </NavItem>
              <NavItem>
                <a className="nav-link" href="#mentor">
                  Become Mentor
                </a>
              </NavItem>
              <NavItem>
                <a className="nav-link" href="#download">
                  Download
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
