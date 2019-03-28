import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Container } from "reactstrap";

class ClassDetailPage extends Component {
  render() {
    const { classId } = this.props.match.params;
    console.log(typeof classId);
    let classItem = this.props.classes
      .filter(item => item.id == classId)
      .map(item => (
        <Container key={item.id} className="my-5">
          <div className="class-detail-banner">
            <Container className="detail-banner-text">
              <h2>{item.name}</h2>
              <p className="class-fee">Rp {item.fee}</p>
              <p className="class-mentor">{item.mentor}</p>
            </Container>
          </div>
          <Container className="class-page-content">
            <div className="class-item">
              <div>
                <p>{item.desc}</p>
              </div>
              <div className="class-grid">
                <p>
                  <i className="ti-calendar" /> Kamis, 1 November 2019{" "}
                </p>
                <p>
                  <i className="ti-alarm-clock" /> 15.00 - 19.00{" "}
                </p>
                <Link to={`/class/${item.id}`} className="btn btn-primary">
                  Enroll Now <i className="ti-angle-double-right" />
                </Link>
              </div>
            </div>
          </Container>
        </Container>
      ));
    return <div className="class-page-detail">{classItem}</div>;
  }
}

const mapStateToProps = state => {
  return {
    classes: state.classes
  };
};

export default connect(mapStateToProps)(ClassDetailPage);
