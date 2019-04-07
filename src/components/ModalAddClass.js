import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { addClass } from "../actions/mentorActions";
import { connect } from "react-redux";

class ModalAddClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState,
      name: "",
      info: "",
      schedule: "",
      fee: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addClass(
      this.state.name,
      this.state.info,
      this.state.schedule,
      this.state.fee
    );

    this.setState({
      name: "",
      info: "",
      schedule: "",
      fee: ""
    });
    this.toggle();
  };

  render() {
    return (
      <React.Fragment>
        <Button color="info" onClick={this.toggle}>
          <i className="ti-plus"/> Add Class
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <Form onSubmit={this.onSubmit}>
            <ModalHeader toggle={this.toggle}>Add Class</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="name">Class Name</Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your awesome class"
                />
              </FormGroup>
              <FormGroup>
                <Label for="info">Info</Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.info}
                  type="text"
                  name="info"
                  id="info"
                  placeholder="Class description"
                />
              </FormGroup>
              <FormGroup>
                <Label for="schedule">Schedule</Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.schedule}
                  type="date"
                  name="schedule"
                  id="schedule"
                />
              </FormGroup>
              <FormGroup>
                <Label for="fee">Fee (Rp) </Label>
                <Input
                  type="number"
                  name="fee"
                  id="fee"
                  placeholder="type your fee"
                  onChange={this.onChange}
                  value={this.state.fee}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="info">Submit</Button>{" "}
              <Button color="danger" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addClass: (name, info, schedule, fee) =>
      dispatch(addClass(name, info, schedule, fee))
  };
};

export default connect(null, mapDispatchToProps)(ModalAddClass);
