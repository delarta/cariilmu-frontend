import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signIn } from '../../actions/studentActions';
import axios from 'axios'

class SignInPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
  }
  
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state.email, this.state.password);
    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    // if(this.props.history.push('/home'))
    return (
      <div className="auth-container">
        <div className="auth-banner" />
        <div className="container auth-page">
          <div className="auth-page-content">
            <h1 className="text-center mb-3">Sign In | Student</h1>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="emailStudent">Email</Label>
                <Input
                  required
                  type="email"
                  name="email"
                  id="emailStudent"
                  placeholder="type your email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  required
                  type="password"
                  name="password"
                  id="passwordauth"
                  placeholder="type your password"
                  onChange={this.onChange}
                  value={this.state.password}
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
    signIn: (email, password) => {
      axios
        .post("https://cari-ilmu.herokuapp.com/login", {
          'email':email,
          'password':password
        })
        .then(res => {
          console.log(res);
          dispatch(signIn(email, password, res.data.message));
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }
}

export default connect(null, mapDispatchToProps)(SignInPage);
