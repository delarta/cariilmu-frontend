import React, { Component } from 'react'
import {Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Col, FormText} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class ProfileMentor extends Component {
  render() {
    return (
        <Container>
        <Form>
        <FormGroup>
          <Label for="headertext">Complete Your Profile</Label>
        </FormGroup>
        <FormGroup>
          <Label for="fullName">Full name :</Label>
          <Input
            type="text"
            name="namaMentor"
            id="namaMentor"
            placeholder="#diisi data dari halaman signup"
          />
        </FormGroup>
        <FormGroup>
          <Label for="emailUser">Email :</Label>
          <Input
            type="email"
            name="emailMentor"
            id="emailMentor"
            placeholder="#diisi data dari halaman signup"
          />
        </FormGroup>
        <FormGroup>
          <Label for="phoneMentor">Your Phone :</Label>
          <InputGroup>
          <InputGroupAddon addonType="prepend">+62
          </InputGroupAddon>
          <input
            type="string"
            name="userPhone"
            id="userPhone"
            placeholder="#diisi data dari halaman signup"
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
        <FormGroup>
          <Label for="mentorName">Username :</Label>
          <Input
            type="text"
            name="mentorUser"
            id="mentorName"
            placeholder="type your username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="birthDay">Birth Day :</Label>
          <Input
            type="date"
            name="birthday"
            id="birthdayMentor"
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
        <FormGroup>
          <Label for="education">Education :</Label>
          <Input
            type="text"
            name="educationMentor"
            id="educationMentor"
            placeholder="your last educational stages"
          />
        </FormGroup>
        <FormGroup>
          <Label for="institution">Institution :</Label>
          <Input
            type="text"
            name="institutionMentor"
            id="institutionMentor"
            placeholder="your institution"
          />
        </FormGroup>
        <FormGroup row>
          <Label for="sertificate" sm={2}>Certificate :</Label>
          <Col sm={10}>
            <Input type="file" 
                   name="fileSertificate" 
                   id="exampleFile" 
            />
            <FormText color="muted">
              Upload your file with extension .jpg, jpeg, or png.
              Files can't above from 500kb.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="sertificate" sm={2}>ID card photo :</Label>
          <Col sm={10}>
            <Input type="file" 
                   name="fileSertificate" 
                   id="exampleFile" 
            />
            <FormText color="muted">
              Upload your file with extension .jpg, jpeg, or png.
              Files can't above from 500kb.
            </FormText>
          </Col>
        </FormGroup>

        <Button color="success" type="submit">save </Button>
      </Form>
      </Container>
    )
  }
}

