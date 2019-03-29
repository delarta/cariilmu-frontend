import React, { Component } from "react";
import {
  Container,
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from "reactstrap";
import presentation from "../assets/img/presentation.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ClassListPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       search: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({search: e.target.value.substr(0, 20)});
  }
  render() {
    let filteredClass = this.props.classes.filter(
      item => {
        return item.name.toLowerCase().indexOf(this.state.search) !== -1;
      }
    )
    let classItem = filteredClass.map(item => (
      <div className="class-item" key={item.id}>
        <div className="class-img">
          <img src={presentation} alt={presentation} />
        </div>
        <div className="class-right">
          <h3>{item.name}</h3>
          <p className="class-mentor">{item.mentor}</p>
          <div className="class-grid">
            <p>
              <i className="ti-calendar" /> Kamis, 1 November 2019{" "}
            </p>
            <p>
              <i className="ti-alarm-clock" /> 15.00 - 19.00{" "}
            </p>
          </div>
          <Link to={`/class/${item.id}`} className="btn btn-primary">
            See Detail <i className="ti-angle-double-right" />
          </Link>
        </div>
      </div>
    ));

    return (
      <div className="class-page">
        <div className="container">
          <InputGroup size="lg">
            <Input onChange={this.handleChange} placeholder="Search"/>
            <InputGroupAddon addonType="append">
              <Button color="primary"><i className="ti-search" /> Search </Button>
            </InputGroupAddon>
          </InputGroup>
          <Container className="class-page-content mt-2 mb-5">
            {classItem}
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { classes: state.classes };
};

export default connect(mapStateToProps)(ClassListPage);
