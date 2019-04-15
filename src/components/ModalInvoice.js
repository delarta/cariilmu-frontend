import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default class ModalInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      loading: false
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
    if (value !== "static") {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>
          {" "}
          Paid
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          backdrop={this.state.backdrop}
        >
          <ModalHeader toggle={this.toggle}> INVOICE</ModalHeader>
          <ModalBody>
           <p> ...........</p>
           <p> ...........</p>
           <p> ...........</p>
           <p> ...........</p>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
