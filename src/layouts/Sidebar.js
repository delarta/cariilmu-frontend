import React from "react";
import { ListGroup } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import avatar from "../assets/img/thinking.svg";
import logo from "../assets/img/logo_light_inline.png";

class SideBar extends React.Component {
  handleLogout = () => {
    this.props.signOut();
    this.props.history.push("/signin-mentor");
  };
  render() {
    const { role, mentor } = this.props;
    let sidebarStyle =
      localStorage.getItem("role") === "mentor" ? "sidebar-mentor" : "sidebar";
    return (
      <div id={sidebarStyle}>
        <ListGroup flush>
          <Link className="list-group-item" to="/">
            <img src={logo} alt={logo} />
          </Link>
          <Link
            to={`/${localStorage.getItem("role")}`}
            className="list-group-item disabled"
            id="avatar-logo"
            tag="a"
            href="#"
          >
            {localStorage.getItem("role") === "mentor" ? (
              <img src={mentor.photo} alt="avatar" />
            ) : (
              <img src={avatar} alt={avatar} />
            )}
          </Link>
          <Link
            className="list-group-item disabled"
            id="avatar-name"
            to={`/${localStorage.getItem("role")}`}
          >
            {mentor.name}
          </Link>
          <Link
            className="list-group-item"
            to={`/${localStorage.getItem("role")}`}
          >
            <i className="ti-dashboard" /> Dashboard
          </Link>
          <Link
            className="list-group-item"
            to={`/${localStorage.getItem("role")}/classes`}
          >
            <i className="ti-blackboard" /> Classes
          </Link>
          {localStorage.getItem("role") === "admin" && (
            <React.Fragment>
              <Link
                className="list-group-item"
                to={`/${localStorage.getItem("role")}/students`}
              >
                <i className="ti-medall" /> Students
              </Link>
              <Link className="list-group-item" to="/admin/mentors">
                <i className="ti-briefcase" /> Mentors
              </Link>
              <Link
                className="list-group-item"
                to={`/${localStorage.getItem("role")}/categories`}
              >
                <i className="ti-agenda" />
                Categories
              </Link>
            </React.Fragment>
          )}

          {localStorage.getItem("role") === "mentor" && (
            <Link
              className="list-group-item"
              to={`/${localStorage.getItem("role")}/profile`}
            >
              <i className="ti-settings" /> Profile
            </Link>
          )}

          <div className="mt-5">
            <Link
              to={`signin-${role}`}
              className="list-group-item logout"
              onClick={this.handleLogout}
            >
              <i className="ti-power-off" /> Logout
            </Link>
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
    signOut: () => dispatch({ type: "SIGN_OUT" })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)
);
