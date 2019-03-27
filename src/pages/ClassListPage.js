import React, { Component } from "react";
import { Container } from "reactstrap";
import presentation from "../assets/img/presentation.svg";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class ClassListPage extends Component {
  
  render() {
    let classItem = this.props.classes.map(item => (
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
        <Container className="class-page-content my-5">
          {classItem}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => { return {classes: state.classes}}

export default connect(mapStateToProps)(ClassListPage);
