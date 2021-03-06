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
import { getCategories } from "../actions/mainActions";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/set_minutes";
import setHours from "date-fns/set_hours";

class ModalAddClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState,
      name: "",
      info: "",
      schedule: new Date(),
      startTime: new Date(),
      endTime: new Date(),
      fee: "",
      category: "",
      image: null,
      imageURI: null
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleDate = date => {
    this.setState({ schedule: date });
  };

  handleStartTime = time => {
    this.setState({ startTime: time });
  };
  handleEndTime = time => {
    this.setState({ endTime: time });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    let categoryObj = this.props.categories.filter(
      item => item._id === this.state.category
    )[0];
    e.preventDefault();
    this.props.addClass(
      this.state.name,
      this.state.info,
      this.state.schedule,
      this.state.fee,
      categoryObj,
      this.state.image,
      this.state.startTime.getTime(),
      this.state.endTime.getTime()
    );

    this.setState({
      name: "",
      info: "",
      schedule: new Date(),
      startTime: new Date(),
      endTime: new Date(),
      fee: "",
      category: "",
      image: null,
      imageURI: null
    });
    this.toggle();
  };

  getPhoto = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.files[0]
    });

    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = ev => {
        this.setState({ imageURI: ev.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Button color="info" onClick={this.toggle}>
          <i className="ti-plus" /> Add Class
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <Form onSubmit={this.onSubmit} encType="multipart/form-data">
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
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="info">Info</Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.info}
                  type="textarea"
                  name="info"
                  id="info"
                  placeholder="Class description"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="schedule">Schedule</Label>
                <div>
                  <DatePicker
                    selected={this.state.schedule}
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
                <Label for="time">Start and End Time</Label>
                <div className="grid-2">
                  <DatePicker
                    id="time"
                    selected={this.state.startTime}
                    onChange={this.handleStartTime}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    minTime={setHours(setMinutes(new Date(), 0), 7)}
                    maxTime={setHours(setMinutes(new Date(), 0), 20)}
                    timeFormat="HH:mm"
                    dateFormat="h:mm aa"
                    timeCaption="Time"
                    placeholderText="Start"
                    className="form-control"
                  />
                  <DatePicker
                    selected={this.state.endTime}
                    onChange={this.handleEndTime}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    minTime={this.state.startTime}
                    maxTime={setHours(setMinutes(new Date(), 0), 20)}
                    timeFormat="HH:mm"
                    dateFormat="h:mm aa"
                    timeCaption="Time"
                    placeholderText="End"
                    className="form-control"
                  />
                </div>
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
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  onChange={this.onChange}
                  required
                  type="select"
                  defaultValue={this.state.category}
                  name="category"
                  id="category"
                >
                  <option value=''>-- Select Category --</option>
                  {this.props.categories.map((category, index) => (
                    <option key={index} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="image">Class Image</Label>
                <div className="pt-3">
                  <img
                    className="img-preview"
                    src={this.state.imageURI}
                    alt={this.state.image}
                  />
                </div>
                <input
                  type="file"
                  onChange={this.getPhoto}
                  name="image"
                  id="image"
                />
                <label htmlFor="image">Upload Image</label>
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

const mapStateToProps = state => {
  return {
    categories: state.main.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addClass: (
      name,
      info,
      schedule,
      fee,
      category,
      image,
      startTime,
      endTime
    ) =>
      dispatch(
        addClass(name, info, schedule, fee, category, image, startTime, endTime)
      ),
    getCategories: () => dispatch(getCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAddClass);
