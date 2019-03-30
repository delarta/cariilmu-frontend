import React, { Component } from 'react'
import {Form,FormGroup, Label, Input, Button, Container, InputGroup, InputGroupAddon} from 'reactstrap'
import {Link} from 'react-router-dom'
export default class SignupMentor extends Component {
  render() {
    return (
        <Container>
        <Form>
        <FormGroup>
          <Label for="headertext">Create Your Account as Mentor! </Label>
        </FormGroup>
        <FormGroup>
          <Label for="fullName">Full name :</Label>
          <Input
            type="text"
            name="namaMentor"
            id="namaMantor"
            placeholder="type your fullname"
          />
        </FormGroup>s
        <FormGroup>
          <Label for="emailUser">Email :</Label>
          <Input
            type="email"
            name="emailMentor"
            id="emailMentor"
            placeholder="type your email addres"
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
            placeholder=" 812345678"
          />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for="passwordMentor">Password :</Label>
          <Input
            type="password"
            name="passwordMentor"
            id="passwordMentor"
            placeholder="type your password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password :</Label>
          <Input
            type="password"
            name="passwordMentor"
            id="passwordMentor"
            placeholder="retype your password"
          />
        </FormGroup>
        <Button color="success" type="submit">Register</Button>
      </Form>
      </Container>
    );
  }
}

