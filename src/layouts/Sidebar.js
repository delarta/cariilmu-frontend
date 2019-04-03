import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import avatar from "../assets/img/thinking.svg";
import logo from "../assets/img/logo_light_inline.png";

class SideBar extends React.Component {
  handleLogout = () =>{
    this.props.signOut();
    this.props.history.push('/home');
    console.log(this.props);
  }
  render() {
    const {role, mentor} = this.props
    console.log(mentor.name)
    return (
      <div id="sidebar">
        <ListGroup flush>
          <Link className="list-group-item" to='/'>
            <img src={logo} alt={logo} />
          </Link>
          <ListGroupItem tag="a" href="#">
            <img src={avatar} alt={avatar} />
          </ListGroupItem>
          <Link className="list-group-item disabled" to={`/${role}`}>
            {mentor.name}
          </Link>
          <Link className="list-group-item" to={`/${role}`}>
            Dashboard
          </Link>
          <Link className="list-group-item" to={`/mentor/classes`}>
            Classes
          </Link>
          <Link className="list-group-item" to={`/${role}/students`}>
            Students
          </Link>
          {role === 'admin' && <Link className="list-group-item" to="/admin/mentors">
            Mentors
          </Link>}
          
          <Link className="list-group-item" to={`/${role}/categories`}>
            Categories
          </Link>
          <div className="mt-5">
            <button className="list-group-item" onClick={this.handleLogout}>
              Logout
            </button>
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch({type: 'SIGN_OUT'})
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar))
