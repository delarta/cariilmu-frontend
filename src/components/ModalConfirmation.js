import React, { Component } from 'react';
import { Link, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Col, Button } from "reactstrap";

export default class ModalConfirmation extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          backdrop: true,
          loading : false
    
        };
    
        this.toggle = this.toggle.bind(this);
        this.changeBackdrop = this.changeBackdrop.bind(this);
        // this.loading = this.loading.bind(this);
        
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
      changeBackdrop(e) {
        let value = e.target.value;
        if (value !== 'static') {
          value = JSON.parse(value);
        }
        this.setState({ backdrop: value });
      }
    
    
  render() {
    return (
      <div className="sectio">
        <Form inline onSubmit={(e) => e.preventDefault()}>
          <Button className="btn btn-primary" onClick={this.toggle}>{this.props.buttonLabel} Enroll Now</Button>
          {/* <Spinner style={{ width: '3rem', height: '3rem' }} />{''} */}
        </Form>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
              <ModalHeader toggle={this.toggle}> Checkout Payment</ModalHeader>
              <ModalBody>
                    <FormGroup row>
                    <Label for="item" sm={3}>Item</Label>
                    <Col sm={9}>
                      <Input type="item" name="item" id="item" placeholder="" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                  <Label for="name" sm={3}>Name</Label>
                    <Col sm={9}>
                      <Input type="name" name="name" id="name" placeholder="" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="id" sm={3}>Id Tranaksi</Label>
                    <Col sm={9}>
                      <Input type="id" name="id" id="id" placeholder="" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="code" sm={3}>Code</Label>
                    <Col sm={9}>
                      <Input type="code" name="code" id="code" placeholder="" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="price" sm={3}>Price</Label>
                    <Col sm={9}>
                      <Input type="price" name="price" id="price" placeholder="" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="total" sm={3}>Total</Label>
                    <Col sm={9}>
                      <Input type="total" name="total" id="total" placeholder="" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="backdrop" sm={3}>Bank</Label>{' '}
                      <Col sm={9}>
                        <Input type="select" name="backdrop" id="backdrop" onChange={this.changeBackdrop}>
                        <option >BCA</option>
                        <option >MANDIRI</option>
                        <option >BRI</option>
                        </Input>
                      </Col>
                  </FormGroup>

              </ModalBody>
              <ModalFooter>
              <Link to="/schedule" className="btn btn-primary">
                      Confirm <i className="ti-angle-double-right" />
                    </Link>
              </ModalFooter>
        </Modal>
      

        
      </div>
    )
  }
}
