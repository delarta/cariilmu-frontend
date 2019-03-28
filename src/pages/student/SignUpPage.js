import React, { Component } from 'react'
import {Form,FormGroup, Label, Input, Button, Container, InputGroup, InputGroupAddon} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class SignupUser extends Component {
  render() {
    return (
        <Container>
        <Form>
        <FormGroup>
          <Label for="headertext">Create Your Account</Label>
        </FormGroup>
        <FormGroup>
          <Label for="fullName">Full name :</Label>
          <Input
            type="text"
            name="namaUser"
            id="namaUser"
            placeholder="type your fullname"
          />
        </FormGroup>
        <FormGroup>
          <Label for="userName">Username :</Label>
          <Input
            type="text"
            name="userName"
            id="userName"
            placeholder="type your username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="emailUser">Email :</Label>
          <Input
            type="email"
            name="emailUser"
            id="emailUser"
            placeholder="type your email"
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="phoneUser">Your Phone :</Label>
          <InputGroup>
          <InputGroupAddon addonType="prepend">+62
          </InputGroupAddon>
          <input
            type="string"
            name="userPhone"
            id="userPhone"
            placeholder=" ex 812345678"
          />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for="passwordUser">Password :</Label>
          <Input
            type="password"
            name="passwordUser"
            id="passwordUser"
            placeholder="type your password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password :</Label>
          <Input
            type="password"
            name="passwordUser"
            id="passwordUser"
            placeholder="retype your password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="birthDay">Birth Day :</Label>
          <Input
            type="date"
            name="birthday"
            id="birthdayUser"
            placeholder="birthDay"
          />
        </FormGroup>
        <FormGroup>
          <Label for="GenderSelect">Gender :</Label>
          <Input type="select" name="select" id="genderSelect">
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>
        <Button color="success" type="submit">Register</Button>
      </Form>
      </Container>
    );
  }
}