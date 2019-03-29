import React from "react";

import NavbarMain from './NavbarMain';
import NavbarSignIn from './NavbarSignIn';
import { connect } from 'react-redux';
import NavbarAdmin from "./NavbarAdmin";

class Header extends React.Component {
  render() {
    console.log(this.props.isAdmin)
    return (
      <React.Fragment>
        {this.props.isAdmin ? <NavbarAdmin /> : <NavbarSignIn />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAdmin: state.isAdmin
  }
}

export default connect(mapStateToProps)(Header);
