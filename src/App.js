import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/themify-icons.css";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./pages/Home";
import SignInPage from "./pages/student/SignInPage";
import ClassList from "./pages/ClassListPage";
import ClassDetail from "./pages/ClassDetailPage";
import AdminPage from "./pages/admin/AdminPage";

import { connect } from "react-redux";

class App extends Component {
  render() {
    
    return (

      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/class" component={ClassList} />
        <Route exact path="/class/:classId" component={ClassDetail} />
        <Route exact path="/admin" component={AdminPage}/>

        <Footer />


      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAdmin: state.isAdmin
  }
}

export default connect(mapStateToProps)(App);
