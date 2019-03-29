import React, { Component } from 'react';
import { Button, CardBody,CardHeader, Card,CardFooter, FormGroup,Label, Col, Input } from 'reactstrap';

import './PaymentPage.css';

class PaymentPage extends Component {
  render() {
    return (
      <div>
        <section className="section">
        <Card className="box">
                  <CardHeader className="Header">
                  <Label> CHECKOUT PAYMENT</Label>
                  </CardHeader>
                    <CardBody className="Body">
                     
                       <FormGroup row>
                          <Label for="order" sm={4}>Item :</Label>
                            <Col sm={8}>
                              <Input type="order" name="order" id="order" placeholder="" disabled />
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="username" sm={4}>Name :</Label>
                            <Col sm={8}>
                              <Input type="Username" name="Username" id="Username" placeholder="" disabled/>
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="exampleEmail" sm={4}>ID Transaction :</Label>
                            <Col sm={8}>
                              <Input type="email" name="email" id="email" placeholder="" disabled/>
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="total" sm={4}>Code :</Label>
                            <Col sm={8}>
                              <Input type="total" name="total" id="total" placeholder="" disabled/>
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="bank" sm={4}>Price :</Label>
                            <Col sm={8}>
                              <Input type="bank" name="bank" id="bank" placeholder="" disabled/>
                                </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Label for="bank" sm={4}>Total :</Label>
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

export default PaymentPage;

