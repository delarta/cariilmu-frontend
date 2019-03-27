import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/themify-icons.css";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./pages/Home";
import SignInPage from "./pages/student/SignInPage";
import ClassList from "./pages/ClassListPage";
import ClassDetail from "./pages/ClassDetailPage";

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

        <Footer />
      </Router>
    );
  }
}

export default App;
