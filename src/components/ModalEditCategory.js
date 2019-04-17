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
import { editCategory, getClass, getCategories } from "../actions/adminActions";
import { connect } from "react-redux";

class ModalEditCategory extends React.Component {
  constructor(props) {
    super(props);

    const { categories, classId } = this.props;
    let category = categories.filter(item => item._id === classId)[0];

    this.state = {
      modal: props.initialModalState,
      name: category.name,
      photo: category.photo
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
    this.props.editCategory(
      this.props.classId,
      this.state.name,
      this.state.photo
    );

    this.setState({
      name: "",
      info: "",
      schedule: "",
      fee: "",
      category: ""
    });
    this.toggle();
  };

  getPhoto = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.files[0]
    });
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.toggle}>
          <i className="ti-pencil" />
        </button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <Form onSubmit={this.onSubmit}>
            <ModalHeader toggle={this.toggle}>Edit Class</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="name">Class Name</Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="type your full name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="photoimg">Category Image</Label>
                <div id="photoimg">
                  <img
                    src={this.state.photo}
                    alt={this.state.photo}
                    style={{ width: "50%" }}
                  />
                </div>
                <input
                  type="file"
                  onChange={this.getPhoto}
                  name="photo"
                  id="photo"
                />
                <label htmlFor="photo">Upload Image</label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary">Submit</Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.mentor.classes,
    categories: state.admin.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCategory: (id, name, photo) => dispatch(editCategory(id, name, photo)),
    getClass: () => dispatch(getClass()),
    getCategories: () => dispatch(getCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalEditCategory);
