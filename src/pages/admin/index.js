import React, { Component } from "react";
import Sidebar from "../../layouts/Sidebar";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Dashboard from "./Dashboard";
import ClassListAdmin from "./ClassListAdmin";
import StudentListAdmin from "./StudentListAdmin";
import MentorListAdmin from "./MentorListAdmin";
import { connect } from "react-redux";

class AdminPage extends Component {
  componentWillMount() {
    console.log(this.props.role)
  }
  render() {
    
    return (
      <Router>
        {this.props.role !== "admin" && this.props.history.push('/signin-admin')}
        
        <div id="admin-page">
          <div className="admin-grid">
            <Sidebar />
            <Route exact path="/admin" component={Dashboard} />
            <Route path="/admin/classes" component={ClassListAdmin} />
            <Route path="/admin/students" component={StudentListAdmin} />
            <Route path="/admin/mentors" component={MentorListAdmin} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.role
  };
};

export default withRouter(connect(mapStateToProps)(AdminPage));
