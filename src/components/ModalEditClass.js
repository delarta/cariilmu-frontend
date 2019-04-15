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
import { editClass, getClass } from "../actions/mentorActions";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";

class ModalEditClass extends React.Component {
  constructor(props) {
    super(props);

    const { classes, classId } = this.props;
    let classItem = classes.filter(item => item._id === classId)[0];

    this.state = {
      modal: props.initialModalState,
      name: classItem.name,
      info: classItem.info,
      schedule: new Date(classItem.schedule),
      category: classItem.category._id,
      fee: classItem.fee
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  handleDate = date => {
    this.setState({ schedule: date });
  };

  onSubmit = e => {
    e.preventDefault();
    let categoryObj = this.props.categories.filter(
      item => item._id === this.state.category
    )[0];
    this.props.editClass(
      this.props.classId,
      this.state.name,
      this.state.info,
      this.state.schedule.toString(),
      categoryObj
    );
    this.props.getClass();

    this.setState({
      name: "",
      info: "",
      schedule: "",
      fee: "",
      category: ""
    });
    this.toggle();
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
                <Label for="info">Info</Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.info}
                  type="text"
                  name="info"
                  id="info"
                />
              </FormGroup>
              <FormGroup>
                <Label for="schedule">Schedule</Label>
                <div>
                  <DatePicker
                    selected={this.state.schedule}
                    dateFormat="yyyy/MM/dd"
                    onChange={this.handleDate}
                    showMonthDropdown
                    showYearDropdown
                    minDate={new Date()}
                    dropdownMode="select"
                    id="schedule"
                    name="schedule"
                    className="form-control"
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  onChange={this.onChange}
                  required
                  type="select"
                  name="category"
                  id="category"
                  defaultValue={this.state.category}
                >
                  {this.props.categories.map((category, index) => (
                    <option key={index} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="fee">Fee (Rp) </Label>
                <Input
                  disabled
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
    categories: state.main.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editClass: (id, name, info, schedule, category) =>
      dispatch(editClass(id, name, info, schedule, category)),
    getClass: () => dispatch(getClass())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalEditClass);
