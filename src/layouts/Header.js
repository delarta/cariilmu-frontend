import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

import logo from '../assets/img/logo_light_inline.png'
import { Link } from 'react-router-dom';

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

  navStyle = () =>{
    window.onscroll = () => {
      console.log(window.pageYOffset)
      if(window.pageYOffset >= 160) {
        return {
          minHeight: '10vh',
          backgroundColor: 'blue'
        }
      }else{
        return {
          minHeight: '10vh'
        }
      }
    }
  }

  
  render() {
    
    return (
      <Navbar style={this.navStyle()} color="dark" dark expand="md">
        <Container>
          <Link className="navbar-brand" to="/"><img style={{ width: "150px" }} src={logo} alt={logo} /></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="nav-link">Fitur</Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="nav-link">Misi</Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="nav-link">Daftar Tutor</Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="nav-link">Download</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>

      </Navbar>
    );
  }
}

export default Header;
