import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'

class SignInPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="signInPage">
          <div className="SignInStudent mt-5"> 
            <img className="imageSignIn"/>
          </div>
        </div>
        <Form>
        <FormGroup>
          <Label for="emailStudent">email :</Label>
          <Input
            type="email"
            name="emailSignInStudent"
            id="emailStudent"
            placeholder="type your email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">password</Label>
          <Input
            type="password"
            name="passwordSignInStudent"
            id="passwordSignIn"
            placeholder="type your password"
          />
        </FormGroup>
        <Button>Sign In.</Button>
      </Form>
      <span>
        <text className="linkSignup">Doesn't have an account? </text>
        <Link to ="/SignUpPage" className="linkSignup"> Sign Up </Link>
      </span>
      </div>
    )
  }
}

export default SignInPage;
