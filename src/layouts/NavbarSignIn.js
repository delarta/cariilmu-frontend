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
import { Link, withRouter } from "react-router-dom";
import { getStudentData } from "../actions/studentActions";

import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
  }

  handleSignOut = () => {
    MySwal.fire({
      title: <p>You are Signed Out</p>,
      type: "success",
      showConfirmButton: false,
      timer: 1500
    })
    this.props.signOut();
    this.props.history.push("/home");
  }

  render() {
    return (
      <Navbar light expand="md">
        <Link className="navbar-brand" to="/">
          <img id="logo-navbar" src={logo} alt={logo} />
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
                <button onClick={this.handleSignOut} className="dropdown-item">
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
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarSignIn));
