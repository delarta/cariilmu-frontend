import React from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";

import logo from "../assets/img/logo_light_inline.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavbarMain extends React.Component {
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
          ).style.backgroundColor = "#4f9da6";
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
              <a className="nav-link" href="#download">
                Download
              </a>
            </NavItem>
            <NavItem active>
              <Link to="/signin" className="nav-link">
                Sign In
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.student.user
  };
};

export default connect(mapStateToProps)(NavbarMain);
