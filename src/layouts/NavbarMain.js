import React from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

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

    return (
      <Navbar light expand="md">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt={logo} />
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/mentors" className="nav-link">
                Mentors
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/class" className="nav-link">
                Classes
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sign In
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/signin" className="dropdown-item">
                  Student
                </Link>
                <Link to="/signin-mentor" className="dropdown-item">
                  Mentor
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
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
