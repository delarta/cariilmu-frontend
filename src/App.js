import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ClassListPage from './pages/ClassListPage';
import CategoryPage from './pages/CategoryPage';
import SchedulePage from './pages/SchedulePage';
import ConfirmationPage from './pages/ConfirmationPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact to="/" render={props => (
            <ConfirmationPage />
          )} />
          <Route exact to="/signin" render={props => (
            <SignInPage />
          )}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
