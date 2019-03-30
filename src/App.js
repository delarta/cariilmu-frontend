import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/themify-icons.css";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./pages/Home";
import SignInPage from "./pages/student/SignInPage";
import ClassList from "./pages/ClassListPage";
import ClassDetail from "./pages/ClassDetailPage";
import ConfirmationPage from './pages/mentor/ConfirmationPage'; 
import SchedulePage from './pages/mentor/SchedulePage';
import PaymenPage from './pages/mentor/PaymentPage';
import CategoryPage from "./pages/CategoryPage";

import SignUpPage from "./pages/mentor/SignUpPage";
import SignIn from "./pages/mentor/SignInPage";



class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        {console.log(this.props)}
        
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/class" component={ClassList} />
        <Route exact path="/class/:classId" component={ClassDetail} />
        <Route exact path="/confirmation" component={ConfirmationPage} />
        <Route exact path="/payment" component={PaymenPage} />
        <Route exact path="/schedule" component={SchedulePage} />
        <Route exact path="/category" component={CategoryPage} />
        <Route exact path="/signupmentor" component={SignUpPage} />

        <Footer />
      </Router>
    );
  }
}

export default App;
