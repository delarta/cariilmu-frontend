import React, { Component } from "react";
import Sidebar from "../../layouts/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ClassListMentor from "./ClassListMentor";
import StudentListMentor from "./StudentListMentor";
import PaymentMentor from "./PaymentPage";
import Dashboard from "./Dashboard";
import { getMentor } from "../../actions/mentorActions";

import { connect } from "react-redux";

class AdminPage extends Component {
  componentDidMount() {
    this.props.getMentor();
  }

  render() {
    localStorage.getItem("role") !== "mentor" &&
      this.props.history.push("/signin-mentor");
    return (
      <Router>
        <div id="admin-page">
          <div className="admin-grid">
            <Sidebar />
            <Route exact path="/admin" component={Dashboard} />
            <Route exact path="/mentor/classes" component={ClassListMentor} />
            <Route exact path="/mentor/students" component={StudentListMentor} />
            <Route path="/mentor/payments" component={PaymentMentor} />
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

const mapDispatchToProps = dispatch => {
  return {
    getMentor: () => dispatch(getMentor())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
