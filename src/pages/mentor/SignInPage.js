import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link} from 'react-router-dom'

class SignInPage extends Component {
  render() {
    return (
      <div className= "container">
        <div className="signInPage">
          <div className="signInMentor mt-5"> 
            <img className="imageSignIn"/>
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
        <Button>Submit</Button>
      </Form>
      <span>
        <text className="linkSignup">Doesn't have an account?</text>
        <Link to ="/SignUpPage" className="linkSignup"> Sign Up </Link>
            </span>
      </div>
    )
  }
}

export default SignInPage;
