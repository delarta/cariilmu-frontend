import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import SignInPage from './pages/student/SignInPage';
import SignUpPage from './pages/student/SignUpPage';

import SignInStudent from './pages/student/SignInPage';
import SignUpMentor from './pages/mentor/SignUpPage';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact to="/" render={props => (
            <Home />
          )} />
          <Route exact to="/signin" render={props => (
            <SignInPage />
          )}/>
          <Route exact to="/signin" render={props => (
            <SignUpPage />
          )}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
