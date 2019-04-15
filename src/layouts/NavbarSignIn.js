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
  DropdownItem
} from "reactstrap";

import logo from "../assets/img/logo_light_inline.png";
import avatar from "../assets/img/thinking.svg";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getStudentData } from "../actions/studentActions";

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

  componentDidMount() {
    this.props.getStudentData();

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
  }

  render() {
    console.log(this.props.student);
    return (
      <Navbar dark expand="md">
        <Link className="navbar-brand" to="/">
          <img style={{ width: "150px" }} src={logo} alt={logo} />
        </Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/class" className="nav-link">
                Classes
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {this.props.role}
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/profile" className="dropdown-item">
                  <img src={avatar} alt={avatar} />
                </Link>
                <Link to="/profile" className="dropdown-item disabled">
                  {this.props.role.name}
                </Link>
                <DropdownItem divider />
                <Link to="/schedule" className="dropdown-item">
                  Schedule
                </Link>
                <button onClick={this.props.signOut} className="dropdown-item">
                  Logout
                </button>
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
    role: state.auth.role,
    student: state.student.student
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch({ type: "SIGN_OUT" }),
    getStudentData: () => dispatch(getStudentData())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarSignIn);
