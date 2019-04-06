import React, { Component } from "react";

export default class CreateClass extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid="displayClass">
            <FormGroup>
              <Label for="photoClass" />
              <Input type="file" name="file" id="filePhoto" />
              <FormText color="muted">
                Upload your picture file extension jpg, jpeg, or png below
                500kb.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="Description"> Class Description : </Label>
              <Input type="textarea" name="text" id="classDescription" />
            </FormGroup>
            <div className="time">
              <FormGroup>
                <Label for="mentorName">Mentor :</Label>
                <Input
                  type="text"
                  name="mentorClass"
                  id="mentorClass"
                  placeholder="type your name on it"
                />
              </FormGroup>
              <FormGroup>
                <Label for="dateClass">Date :</Label>
                <Input
                  type="date"
                  name="date"
                  id="dateClass"
                  placeholder="date"
                />
              </FormGroup>
              <FormGroup>
                <Label for="timeClass">Time :</Label>
                <Input
                  type="time"
                  name="time"
                  id="timeClass"
                  placeholder="time placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="locationClass">Location :</Label>
                <Input
                  type="text"
                  name="locationClass"
                  id="locationClass"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
            </div>
          </Container>
        </Jumbotron>
        <Button>Create Class</Button>
      </div>
    );
  }
}
