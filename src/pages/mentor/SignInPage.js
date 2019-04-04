<<<<<<< HEAD
import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'
import Photo from "../../assets/img/photo.png";
=======
import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { signIn } from '../../actions/mentorActions';
>>>>>>> ff2e46a6d5fe366393319ba94ee1df3bd6193d4c

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
  
  componentDidUpdate() {
    console.log(this.props.role)
  }
  render() {
    this.props.role === 'mentor' && this.props.history.push('/mentor');

    return (
<<<<<<< HEAD
      <div className= "container">
        <div className="signInPage">
          <div className="signInMentor mt-5"> 
            <img className="imageSignIn"src={Photo} alt={Photo}/>
          </div>
        </div>
        <Form>
        <FormGroup>
          <Label for="emailMentor">email :</Label>
          <Input
            type="email"
            name="emailSignInMentor"
            id="emailMentor"
            placeholder="type your email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">password</Label>
          <Input
            type="password"
            name="passwordSignInMentor"
            id="passwordMentor"
            placeholder="type your password"
          />
        </FormGroup>
        <Button bgcolor>Submit</Button>
      </Form>
      <span>
        <text className="linkSignup">Doesn't have an account?</text>
        <Link to ="/SignUpPage" className="linkSignup"> Sign Up </Link>
            </span>
=======
      <div className="auth-container">
        <div className="auth-banner mentor" />
        <div className="container auth-page">
          <div className="auth-page-content">
            <h1 className="text-center mb-3">Sign In | Mentor</h1>
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
                  <Link to="/signup-mentor">
                    Sign Up
                  </Link>{" "}
                </p>
              </div>
            </Form>
          </div>
        </div>
>>>>>>> ff2e46a6d5fe366393319ba94ee1df3bd6193d4c
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    role: state.auth.role
  }
}

const mapDispatchToProps = dispatch => {
  return{
    signIn: (email, password) => {
      dispatch(signIn(email, password));
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(SignInPage);
