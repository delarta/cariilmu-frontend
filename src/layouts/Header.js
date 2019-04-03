import React from "react";
import { withRouter } from 'react-router-dom';

import NavbarSignIn from './NavbarSignIn';
import NavbarMain from './NavbarMain';

import { connect } from 'react-redux';
import NavbarAdmin from "./NavbarAdmin";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.role !== 'admin' ?
          this.props.role === 'student' ?
          <NavbarSignIn /> : <NavbarMain />
          :
          <NavbarAdmin />
       }

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.role
  }
}

export default withRouter(connect(mapStateToProps)(Header));
