import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormText, FormGroup, Col, Button } from "reactstrap";
import {Link} from "react-router-dom";

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
      <div>
     
          <Button color="danger" onClick={this.toggle}> Pending</Button>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
              <ModalHeader toggle={this.toggle}> CONFIRMATION</ModalHeader>
              <ModalBody>
                    <FormGroup row>
                    <Label for="id" sm={3}>ID Tranaksi</Label>
                    <Col sm={9}>
                      <Input type="id" name="id" id="id" placeholder="" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                  <Label for="transfer" sm={3}>Transfer To</Label>
                    <Col sm={9}>
                      <Input type="transfer" name="transfer" id="transfer" placeholder="" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="price" sm={3}>Price</Label>
                    <Col sm={9}>
                      <Input type="price" name="price" id="price" placeholder="" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="code" sm={3}>Code</Label>
                    <Col sm={9}>
                      <Input type="code" name="code" id="code" placeholder="" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="total" sm={3}>Total</Label>
                    <Col sm={9}>
                      <Input type="total" name="total" id="total" placeholder="" />
                    </Col>
                  </FormGroup>

                <FormGroup row>

                <Label for="exampleFile" sm={3}>File</Label>
                <Col sm={9}>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </Col>
                </FormGroup>
              </ModalBody>
              <ModalFooter>

               <Button className="btn btn-primary" onClick={this.toggle}> Confirm</Button>
              </ModalFooter>
        </Modal>
      

        
      </div>
    )
  }
}


