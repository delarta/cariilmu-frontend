import React from 'react';
import {Container} from 'reactstrap';
import {Nav,NavItem, NavLink} from 'reactstrap';

function Footer() {
  return (
    <footer>
      <Container id="footer">
        <Nav>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>
          </Nav>
      </Container>
    </footer>
  )
}

export default Footer