import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/themify-icons.css";

import Footer from "./layouts/Footer";
import MainPage from "./pages/main";
import AdminPage from "./pages/admin";
import CategoryPage from "./pages/main/CategoryPage";
import HomepageMentor from "./pages/mentor/HomepageMentor"

import SignInAdmin from "./pages/admin/SignInAdmin";
import SignInMentor from "./pages/mentor/SignInPage";
import SignUpMentor from "./pages/mentor/SignUpPage";
import MentorPage from "./pages/mentor";

import SignInPage from "./pages/student/SignInPage";
import SignUpPage from "./pages/student/SignUpPage";

import { getRole } from "./actions/mainActions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.getRole();
  }
  render() {
    return (
      <Router>
        <Route exact path="/signin-mentor" component={SignInMentor} />
        <Route exact path="/signup-mentor" component={SignUpMentor} />
        <Route exact path="/mentor" component={MentorPage} />
        <Route exact path="/homepage-mentor" component={HomepageMentor}/>

        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        
        <Route exact path="/signin-admin" component={SignInAdmin} />
        <Route exact path="/admin" component={AdminPage} />
        <Route path="/" component={MainPage} />
        <Route path="/category" component={CategoryPage} />
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
