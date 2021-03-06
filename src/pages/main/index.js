import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "../../layouts/Header"
import Landing from "./Landing";
import HomePage from "./HomePage";
import ClassList from "./ClassListPage";
import ClassDetail from "./ClassDetailPage";
import CategoryPage from "./CategoryPage";
import ConfirmationPage from '../mentor/ConfirmationPage';
import PaymentPage from '../mentor/PaymentPage';
import SchedulePage from '../student/SchedulePage';
import HomepageMentor from '../mentor/HomepageMentor';
import Cart from '../student/cart';

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/class" component={ClassList} />
        <Route exact path="/category" component={CategoryPage}/>
        <Route exact path="/class/:classId" component={ClassDetail} />
        <Route exact path="/mentor" component={HomepageMentor} />

        <Route exact path="/confirmation" component={ConfirmationPage} />
        <Route exact path="/payment" component={PaymentPage} />
        <Route exact path="/schedule" component={SchedulePage} />
        <Route exact path="/cart" component={Cart} />
      </React.Fragment>
    );
  }
}
