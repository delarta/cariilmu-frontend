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
import { addCategory } from "../actions/adminActions";
import { connect } from "react-redux";

class ModalAddCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState,
      name: ""
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
    this.props.addCategory(
      this.state.name
    );

    this.setState({
      name: ""
    });
    this.toggle();
  };

  render() {
    return (
      <React.Fragment>
        <Button color="info" onClick={this.toggle}>
          <i className="ti-plus" /> Add Category
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <Form onSubmit={this.onSubmit}>
            <ModalHeader toggle={this.toggle}>Add Add Category</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="name">Category Name</Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.name}
                  type="text"
                  name="name"
                  id="name"
                  required
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
    addCategory: (name) =>
      dispatch(addCategory(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ModalAddCategory);
