import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom'

import avatar from "../assets/img/thinking.svg";
export default class NavbarAdmin extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <ListGroup flush>
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
