/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { enroll } from "../../actions/studentActions";
import { connect } from "react-redux";

import Header from "../../layouts/Header";
import { Link } from "react-router-dom";

import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  Col,
  Button
} from "reactstrap";

class ClassDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true,
      loading: false
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
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
  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleEnroll = classid => {
    console.log("reloaad", classid);
    classid.preventDefault();
    this.props.enroll(this.props.match.params);
    this.props.history.push("/cart");
  };

  render() {
    const { classId } = this.props.match.params;
    const backgroundStyle = image => {
      return {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "105%",
        backgroundPosition: "-5px"
      };
    };
    let classItem = this.props.classes
      .filter(item => item._id === classId)
      .map(item => (
        <Container key={item._id} className="my-5">
          <div
            className="class-detail-banner"
            style={backgroundStyle(item.image)}
          >
            <Container className="detail-banner-text">
              <h2>{item.name}</h2>
              <p className="class-fee">Price : Rp {item.fee}</p>
              <p className="class-mentor">By : {item.mentor.name}</p>
            </Container>
          </div>
          <Container className="class-page-content">
            <div className="class-item">
              <div>
                <p>{item.info}</p>
              </div>
              <div className="class-grid">
                <p>
                  <i className="ti-calendar" />{" "}
                  {new Date(item.schedule).toDateString()}{" "}
                </p>
                <p>
                  {`${this.addZero(
                    new Date(item.startTime).getHours()
                  )}:${this.addZero(
                    new Date(item.startTime).getMinutes()
                  )} - ${this.addZero(
                    new Date(item.endTime).getHours()
                  )}:${this.addZero(new Date(item.endTime).getMinutes())}`}
                </p>

                <Form inline onSubmit={e => e.preventDefault()}>
                  {sessionStorage.getItem("role") !== "student" ? (
                    <Link className="btn btn-primary" to="/signin">
                      Enroll now
                    </Link>
                  ) : (
                    <Button className="btn btn-primary" onClick={this.toggle}>
                      {this.props.buttonLabel} Enroll Now
                    </Button>
                  )}
                </Form>

                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                  backdrop={this.state.backdrop}
                >
                  <Form onSubmit={this.handleEnroll}>
                    <ModalHeader toggle={this.toggle}>
                      {" "}
                      Checkout Payment
                    </ModalHeader>
                    <ModalBody>
                      <FormGroup row>
                        <Label for="item" sm={3}>
                          Item
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="item"
                            name="item"
                            id="item"
                            placeholder=""
                            value={item.name}
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="mentor" sm={3}>
                          Mentor
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="mentor"
                            name="mentor"
                            id="mentor"
                            placeholder=""
                            value={item.mentor.name}
                            disabled
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="id" sm={3}>
                          Id Transaksi
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="id"
                            name="id"
                            id="id"
                            placeholder=""
                            value={item._id}
                            disabled
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="price" sm={3}>
                          Price
                        </Label>
                        <Col sm={9}>
                          <Input
                            type="price"
                            name="price"
                            id="price"
                            placeholder=""
                            value={item.fee}
                            disabled
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Label for="backdrop" sm={3}>
                          Bank
                        </Label>{" "}
                        <Col sm={9}>
                          <Input
                            type="select"
                            name="backdrop"
                            id="backdrop"
                            onChange={this.changeBackdrop}
                          >
                            <option>BCA</option>
                            <option>MANDIRI</option>
                            <option>BRI</option>
                          </Input>
                        </Col>
                      </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                      <Button type="submit" color="primary">
                        Submit
                      </Button>
                    </ModalFooter>
                  </Form>
                </Modal>
              </div>
            </div>
          </Container>
        </Container>
      ));
    return (
      <React.Fragment>
        <Header />
        <div className="class-page-detail">{classItem}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.main.classes
  };
};

//testing
const mapDispatchToProps = dispatch => {
  return {
    enroll: classid => dispatch(enroll(classid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassDetailPage);
