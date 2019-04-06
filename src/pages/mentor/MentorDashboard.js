import React, { Component } from "react";
import Sidebar from "../../layouts/Sidebar";
import { Route } from "react-router-dom";
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
    this.props.role !== "mentor" &&
      this.props.history.push("/signin-mentor");
    return (
      <React.Fragment>
        <div id="admin-page">
          <div className="admin-grid">
            <Sidebar />
            <Route exact path="/mentor" component={Dashboard} />
            <Route exact path="/mentor/classes" component={ClassListMentor} />
            <Route exact path="/mentor/students" component={StudentListMentor} />
            <Route exact path="/mentor/payments" component={PaymentMentor} />
          </div>
        </div>
      </React.Fragment>
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
