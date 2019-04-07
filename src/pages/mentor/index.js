import React, { Component } from "react";
import Sidebar from "../../layouts/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ClassListMentor from "./ClassListMentor";
import PaymentMentor from "./PaymentPage";
import Dashboard from "./Dashboard";
import { getMentor } from "../../actions/mentorActions";

import { connect } from "react-redux";

class AdminPage extends Component {
  componentDidMount() {
    this.props.getMentor();
    this.props.role !== "mentor" && this.props.history.push("/signin-mentor");
  }

  render() {
    return (
      <Router>
        <div id="admin-page">
          <div className="admin-grid">
            <Sidebar />
            <Route exact path="/mentor" component={Dashboard} />
            <Route path="/mentor/classes" component={ClassListMentor} />
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
