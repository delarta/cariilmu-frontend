import React from "react";

import NavbarSignIn from './NavbarSignIn';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        {!this.props.isAdmin&& <NavbarSignIn />}
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
