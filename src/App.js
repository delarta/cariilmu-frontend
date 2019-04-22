import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/themify-icons.css";

import Footer from "./layouts/Footer";
import AdminPage from "./pages/admin";
import CategoryPage from "./pages/main/CategoryPage";
import HomepageMentor from "./pages/mentor/HomepageMentor";

import SignInAdmin from "./pages/admin/SignInAdmin";
import SignInMentor from "./pages/mentor/SignInPage";
import SignUpMentor from "./pages/mentor/SignUpPage";
import MentorPage from "./pages/mentor";

import NotFound from "./components/NotFound";

import SignInPage from "./pages/student/SignInPage";
import SignUpPage from "./pages/student/SignUpPage";

import Landing from "./pages/main/Landing";
import HomePage from "./pages/main/HomePage";
import ClassList from "./pages/main/ClassListPage";
import ClassDetail from "./pages/main/ClassDetailPage";

import SchedulePage from './pages/student/SchedulePage';

import { getRole } from "./actions/mainActions";
import { connect } from "react-redux";
import MentorDetail from "./pages/main/MentorDetail";
import MentorListPage from "./pages/main/MentorListPage";

class App extends Component {
  componentDidMount() {
    this.props.getRole();
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signin-mentor" component={SignInMentor} />
          <Route exact path="/signup-mentor" component={SignUpMentor} />
          <Route exact path="/mentor" component={MentorPage} />
          <Route exact path="/mentor/:mentorId" component={MentorDetail} />

          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />

          <Route exact path="/signin-admin" component={SignInAdmin} />
          <Route exact path="/admin" component={AdminPage} />
          
          {/* Main */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/class" component={ClassList} />
          <Route exact path="/mentors" component={MentorListPage} />
          <Route exact path="/class/:classId" component={ClassDetail} />
          <Route exact path="/category/:categoryId" component={CategoryPage} />


          <Route exact path="/homepage-mentor" component={HomepageMentor}/>
          <Route exact path="/schedule" component={SchedulePage} />

          <Route component={NotFound} />
        </Switch>
        <Footer />
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
    getRole: () => dispatch(getRole())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
