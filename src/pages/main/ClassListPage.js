import React, { Component } from "react";
import {
  Container,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap";
import ClassItem from "./ClassItem";
import { connect } from "react-redux";

class ClassListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };
  render() {
    return (
      <div className="class-page">
        <div className="container">
          <InputGroup size="lg">
            <Input onChange={this.handleChange} placeholder="Search" />
            <InputGroupAddon addonType="append">
              <Button color="primary">
                <i className="ti-search" /> Search{" "}
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <Container className="class-page-content mt-2 mb-5">
            <ClassItem searchItem={this.state.search} />
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { classes: state.student.classes };
};

export default connect(mapStateToProps)(ClassListPage);
