import React from "react";
import { ListGroup, Badge } from "reactstrap";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../actions/mainActions";

import avatar from "../assets/img/user.svg";
import logo from "../assets/img/logo_dark_inline.png";

class SideBar extends React.Component {
  handleLogout = () => {
    this.props.signOut();
    this.props.history.push("/signin-mentor");
  };
  render() {
    const { role, mentor } = this.props;
    let sidebarStyle =
      sessionStorage.getItem("role") === "mentor"
        ? "sidebar-mentor"
        : "sidebar";
    return (
      <div id={sidebarStyle}>
        <ListGroup flush>
          <Link className="list-group-item" to="/">
            <img src={logo} alt={logo} />
          </Link>
          <Link
            to={`/${sessionStorage.getItem("role")}`}
            className="list-group-item disabled"
            id="avatar-logo"
            tag="a"
            href="#"
          >
            {sessionStorage.getItem("role") === "mentor" && mentor.photo ? (
              <img src={mentor.photo} alt={mentor.photo} />
            ) : (
              <img src={avatar} alt={avatar} />
            )}
          </Link>
          {sessionStorage.getItem("role") === "mentor" && (
            <Link
              className="list-group-item disabled"
              id="avatar-name"
              to={`/${sessionStorage.getItem("role")}`}
            >
              {mentor.name}
              <p>
                {mentor.verified ? (
                  <Badge color="success">verified</Badge>
                ) : (
                  <Badge color="danger">Unverified</Badge>
                )}
              </p>
            </Link>
          )}
          <NavLink
            className="list-group-item"
            activeClassName="active-sidebar"
            exact
            to={`/${sessionStorage.getItem("role")}`}
          >
            <i className="ti-dashboard" /> Dashboard
          </NavLink>
          <NavLink
            className="list-group-item"
            activeClassName="active-sidebar"
            to={`/${sessionStorage.getItem("role")}/classes`}
          >
            <i className="ti-blackboard" /> Classes
          </NavLink>
          {sessionStorage.getItem("role") === "admin" && (
            <React.Fragment>
              <NavLink
                className="list-group-item"
                to={`/${sessionStorage.getItem("role")}/students`}
              >
                <i className="ti-medall" /> Students
              </NavLink>
              <NavLink className="list-group-item" to="/admin/mentors">
                <i className="ti-briefcase" /> Mentors
              </NavLink>
              <NavLink
                className="list-group-item"
                to={`/${sessionStorage.getItem("role")}/categories`}
              >
                <i className="ti-agenda" />
                Categories
              </NavLink>
              <NavLink
                className="list-group-item"
                activeClassName="active-sidebar"
                to={`/${sessionStorage.getItem("role")}/mentor-payments`}
              >
                <i className="ti-wallet" /> Mentor Payments
              </NavLink>
            </React.Fragment>
          )}
          <NavLink
            className="list-group-item"
            activeClassName="active-sidebar"
            to={`/${sessionStorage.getItem("role")}/payments`}
          >
            <i className="ti-wallet" /> Payment
          </NavLink>

          {sessionStorage.getItem("role") === "mentor" && (
            <NavLink
              className="list-group-item"
              activeClassName="active-sidebar"
              to={`/${sessionStorage.getItem("role")}/profile`}
            >
              <i className="ti-settings" /> Profile
            </NavLink>
          )}

          <div className="logout-item">
            <NavLink
              to={`signin-${role}`}
              className="list-group-item logout"
              onClick={this.handleLogout}
            >
              <i className="ti-power-off" /> Logout
            </NavLink>
          </div>
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.role,
    mentor: state.mentor.mentor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)
);
