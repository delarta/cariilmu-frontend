import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignInPage from "../student/SignInPage";
import SignUpPage from "../student/SignUpPage";

import Header from "../../layouts/Header"
import Landing from "./Landing";
import HomePage from "./HomePage";
import ClassList from "./ClassListPage";
import ClassDetail from "./ClassDetailPage";
import ConfirmationPage from '../mentor/ConfirmationPage';
import PaymentPage from '../mentor/PaymentPage';
import SchedulePage from '../student/SchedulePage';

export default class index extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/class" component={ClassList} />
        <Route exact path="/class/:classId" component={ClassDetail} />

        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />

        <Route exact path="/confirmation" component={ConfirmationPage} />
        <Route exact path="/payment" component={PaymentPage} />
        <Route exact path="/schedule" component={SchedulePage} />
      </Router>
    );
  }
}
