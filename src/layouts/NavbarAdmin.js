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
} from 'reactstrap';

import logo from "../assets/img/logo_light_inline.png";
import avatar from "../assets/img/thinking.svg";

import { Link } from 'react-router-dom';

class NavbarAdmin extends React.Component {
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
      <Navbar dark expand="md" style={{minHeight:'10vh',backgroundColor:'#3d4351',position:'static'}}>
        {/* <Container> */}
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
                  Admin
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to='/profile' className="dropdown-item">
                    <img src={avatar} alt={avatar}/>
                  </Link>
                  <Link to='/profile' className="dropdown-item disabled">
                    Admin
                  </Link>
                  <DropdownItem divider />
                  <Link to='/schedule' className="dropdown-item">
                    Schedule
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        {/* </Container> */}
      </Navbar>
    );
  }
}

export default NavbarAdmin;
