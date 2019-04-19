import React from "react";
import { withRouter } from "react-router-dom";

import NavbarSignIn from "./NavbarSignIn";
import NavbarMain from "./NavbarMain";

import { connect } from "react-redux";
import NavbarAdmin from "./NavbarAdmin";

class Header extends React.Component {
  handleScroll = (event) => {
    if (
      window.innerWidth > 768 &&
      this.props.location.pathname !== "/signin" &&
      this.props.location.pathname !== "/signin-mentor" &&
      this.props.location.pathname !== "/signin-admin" &&
      this.props.location.pathname !== "/signup" &&
      this.props.location.pathname !== "/signup-mentor"
    ) {
      console.log(this.props.location.pathname)
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
    
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {this.props.role !== "admin" ? (
          this.props.role === "student" ? (
            <NavbarSignIn />
          ) : (
            <NavbarMain />
          )
        ) : (
          <NavbarAdmin />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.role
  };
};

export default withRouter(connect(mapStateToProps)(Header));
