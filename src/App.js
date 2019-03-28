import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import SignInPage from './pages/student/SignInPage';
import ConfirmationPage from './pages/mentor/ConfirmationPage';
import PaymentPage from './pages/mentor/PaymentPage';
import SchedulePage from './pages/mentor/SchedulePage';


class App extends Component {
  render() {
    return (
      <Router>
          <Header />
            {console.log(this.props)}
          <Route exact to="/" render={props => (
            <SchedulePage/>
          )} />
          <Route exact to="/signin" render={props => (
            <SignInPage />
          )}/>
          <Footer />
        
      </Router>
    );
  }
}

export default App;
