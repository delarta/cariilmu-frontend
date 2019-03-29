import React, { Component } from "react";
import Sidebar from "../../layouts/Sidebar";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import ClassListAdmin from "./ClassListAdmin";
import StudentListAdmin from "./StudentListAdmin";
import MentorListAdmin from "./MentorListAdmin";

export default class AdminPage extends Component {
  render() {
    return (
      <Router>
        <div id="admin-page">
          <div className="admin-grid">
          <Sidebar />
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/admin/classes" component={ClassListAdmin} />
          <Route exact path="/admin/students" component={StudentListAdmin} />
          <Route exact path="/admin/mentors" component={MentorListAdmin} />
          </div>
        
      </div>
      </Router>
      
    );
  }
}
