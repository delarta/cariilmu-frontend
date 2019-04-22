import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Badge } from "reactstrap";
import ClassItem from "./ClassItem";
import Header from "../../layouts/Header";
import StarRatings from "react-star-ratings";


class MentorDetail extends Component {
  render() {
    console.log(this.props.mentors);
    const { mentorId } = this.props.match.params;

    let mentorItem = this.props.mentors
      .filter(item => item._id === mentorId)
      .map((item, index) => (
        <Container key={index} className="mentor-detail-grid">
          <div className="mentor-detail-banner container">
            <div>
              <img src={item.photo} alt={item.photo} />
            </div>
            <div>
              <h2>{item.name}</h2>
              <p>
                {item.verified ? (
                  <Badge color="success">Verified</Badge>
                ) : (
                  <Badge color="secondary">Unverified</Badge>
                )}
                {" "}
                <StarRatings
              rating={item.avgRating}
              starDimension="20px"
              starRatedColor="f3ae4b"
              starSpacing="1px"
            />
              </p>
              <hr />
              <div>
                <h4>About Mentor</h4>
                <p>{item.bio}</p>
              </div>
            </div>
            <div />
          </div>
          <div className="mentor-page-content">
            <div className="pt-3 pb-5">
              <h3 style={{fontWeight:"700"}}>Teaching</h3>
            </div>
            <div className="grid-3">
            <ClassItem />

            </div>
          </div>
        </Container>
      ));
    return (
      <React.Fragment>
        <Header />
        <div className="mentor-page-detail">{mentorItem}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    mentors: state.main.mentors
  };
};

export default connect(mapStateToProps)(MentorDetail);
