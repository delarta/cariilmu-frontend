import React from "react";
import { withRouter } from "react-router-dom";

import NavbarSignIn from "./NavbarSignIn";
import NavbarMain from "./NavbarMain";

import { connect } from "react-redux";
import NavbarAdmin from "./NavbarAdmin";

import logo from "../assets/img/logo_blue_inline.png";
import logo_light from "../assets/img/logo_light_inline.png";

class Header extends React.Component {
  handleScroll = event => {
    if (
      // window.innerWidth > 768 &&
      this.props.location.pathname !== "/signin" &&
      this.props.location.pathname !== "/signin-mentor" &&
      this.props.location.pathname !== "/signin-admin" &&
      this.props.location.pathname !== "/signup" &&
      this.props.location.pathname !== "/signup-mentor"
    ) {
      if (window.pageYOffset >= 60) {
        document.getElementById("logo-navbar").src = logo;
        document
          .querySelector(".navbar.navbar-expand-md.navbar-light")
          .classList.add("navbar-scrolled");
      } else {
        document.getElementById("logo-navbar").src = logo_light;
        document
          .querySelector(".navbar.navbar-expand-md.navbar-light")
          .classList.remove("navbar-scrolled");
      }
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
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
