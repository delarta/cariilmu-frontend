import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom'

import avatar from "../assets/img/thinking.svg";
import logo from "../assets/img/logo_light_inline.png";

export default class NavbarAdmin extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <ListGroup flush>
          <ListGroupItem tag="a" href="/">
            <img src={logo} alt={logo} />
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            <img src={avatar} alt={avatar} />
          </ListGroupItem>
          <Link className="list-group-item" to='/admin'>
            Dashboard
          </Link>
          <Link className="list-group-item" to='/admin/classes'>
            Classes
          </Link>
          <Link className="list-group-item" to='/admin/students'>
            Students
          </Link>
          <Link className="list-group-item" to='/admin/students'>
            Mentors
          </Link>
        </ListGroup>
      </div>
    );
  }
}
