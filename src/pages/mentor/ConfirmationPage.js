import React, { Component } from 'react';
import { Button, CardBody,CardHeader, Card,CardFooter, FormGroup,Label, Col, Input } from 'reactstrap';

import '../ConfirmationPage.css';

class ConfirmationPage extends Component {
  render() {
    return (
      <div>
          <section className="sec_1"> 
          <Card className="box1">
                  <CardHeader className="Header1">
                  <Label> CONFIRMATION PAYMENT</Label>
                  </CardHeader>
                    <CardBody className="Body1">
                     
                       <FormGroup row>
                          <Label for="order" sm={4}>No.Order :</Label>
                            <Col sm={8}>
                              <Input type="order" name="order" id="order" placeholder="" disabled />
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="username" sm={4}>Username :</Label>
                            <Col sm={8}>
                              <Input type="Username" name="Username" id="Username" placeholder="" disabled/>
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="exampleEmail" sm={4}>Email :</Label>
                            <Col sm={8}>
                              <Input type="email" name="email" id="email" placeholder="" disabled/>
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="total" sm={4}>Total :</Label>
                            <Col sm={8}>
                              <Input type="total" name="total" id="total" placeholder="" disabled/>
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="bank" sm={4}>Bank :</Label>
                            <Col sm={8}>
                              <Input type="bank" name="bank" id="bank" placeholder="" disabled/>
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="bank" sm={4}>Upload File :</Label>
                            <Col sm={8}>
                            <Input type="file" name="file" id="exampleFile" />
                                </Col>
                        </FormGroup>
                        
                     
                    </CardBody>
                  <CardFooter className="footer">
                    <Button color="danger"> Cancel </Button>
                    <Button color="success"> Confirm </Button>
                  </CardFooter>
          </Card>

          </section>
      </div>
    )
  }
}

export default ConfirmationPage;

