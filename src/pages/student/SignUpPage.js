import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

export default class SignupUser extends Component {
  render() {
    return (
      <div className="auth-container">
        <div className="auth-banner" />
        <div className="container auth-page">
          <div className="auth-page-content">
            <h1 className="text-center mb-3">Sign Up</h1>
            <Form>
              <FormGroup>
                <Label for="name">Full Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="type your full name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Full Name</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="type your username"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="type your email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">+62</InputGroupAddon>
                  <Input type="text" id="phone" placeholder="81234567890" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="type your password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password_confirm">Confirm Password</Label>
                <Input
                  type="password"
                  name="password_confirm"
                  id="password_confirm"
                  placeholder="retype your password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="birth">Date of Birth</Label>
                <Input
                  type="date"
                  name="birth"
                  id="birth"
                />
              </FormGroup>
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input type="select" name="gender" id="gender">
                  <option>Male</option>
                  <option>Female</option>
                </Input>
              </FormGroup>
              <div className="text-center">
                <Button color="primary">Sign Up</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
