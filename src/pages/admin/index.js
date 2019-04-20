import React, { Component } from "react";
import Sidebar from "../../layouts/Sidebar";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import ClassListAdmin from "./ClassListAdmin";
import StudentListAdmin from "./StudentListAdmin";
import MentorListAdmin from "./MentorListAdmin";
import { connect } from "react-redux";
import {
  getMentors,
  getClass,
  getStudents,
  getCategories,
  getPayments,
  getMentorPayments
} from "../../actions/adminActions";
import CategoryList from "./CategoryList";
import PaymentsAdmin from "./PaymentsAdmin";
import MentorPaymentsAdmin from "./MentorPaymentsAdmin";

class AdminPage extends Component {
  componentDidMount() {
    this.props.getMentors();
    this.props.getClass();
    this.props.getStudents();
    this.props.getCategories();
    this.props.getPayments();
    this.props.getMentorPayments();
  }
  render() {
    this.props.role !== "admin" &&
          this.props.history.push("/signin-admin")

    return (
      <Router>
        <div id="admin-page">
          <div className="admin-grid">
            <Sidebar />
            <Route exact path="/admin" component={Dashboard} />
            <Route path="/admin/classes" component={ClassListAdmin} />
            <Route path="/admin/students" component={StudentListAdmin} />
            <Route path="/admin/mentors" component={MentorListAdmin} />
            <Route path="/admin/categories" component={CategoryList} />
            <Route path="/admin/payments" component={PaymentsAdmin} />
            <Route path="/admin/mentor-payments" component={MentorPaymentsAdmin} />

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
    getMentors: () => dispatch(getMentors()),
    getClass: () => dispatch(getClass()),
    getStudents: () => dispatch(getStudents()),
    getCategories: () => dispatch(getCategories()),
    getPayments: () => dispatch(getPayments()),
    getMentorPayments: () => dispatch(getMentorPayments())

  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminPage)
);
