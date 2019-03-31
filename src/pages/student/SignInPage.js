import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

class SignInPage extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    this.props.signIn('Joni');
    this.props.history.push('/home');
  }
  render() {
    return (
      <div className="auth-container">
        <div className="auth-banner" />
        <div className="container auth-page">
          <div className="auth-page-content">
            <h1 className="text-center mb-3">Sign In</h1>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="emailStudent">Email</Label>
                <Input
                  type="email"
                  name="emailauthStudent"
                  id="emailStudent"
                  placeholder="type your email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="passwordauthStudent"
                  id="passwordauth"
                  placeholder="type your password"
                />
              </FormGroup>
              <div className="text-center">
                <Button color="primary">Sign In</Button>

                <p className="mt-3">
                  Doesn't have an account?{" "}
                  <Link to="/signup">
                    Sign Up
                  </Link>{" "}
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    signIn: (name) => dispatch({type:'SIGN_IN', data:name})
  }
}

export default connect(null, mapDispatchToProps)(SignInPage);
