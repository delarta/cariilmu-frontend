import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMentors } from "../../actions/mainActions";
import StarRatings from "react-star-ratings";

class MentorItem extends Component {
  componentDidMount() {
    this.props.getMentors();
  }
  render() {
    const { mentors } = this.props;
    console.log(mentors);

    let filteredMentor = mentors.reverse();
    if (this.props.searchItem !== undefined) {
      filteredMentor = mentors.filter(item => {
        return item.name.toLowerCase().indexOf(this.props.searchItem) !== -1;
      });
    } else {
      filteredMentor = mentors.slice(0, 3);
    }
    return filteredMentor.map(item => (
      <div className="mentor-item" key={item._id}>
        <div className="mentor-img">
          <img src={item.photo} alt={item.photo} />
        </div>
        <div className="mentor-right">
          <h3>{item.name}</h3>
          <p>{item.bio}</p>
          <div className="mb-4">
            <StarRatings
              rating={item.avgRating}
              starDimension="20px"
              starRatedColor="f3ae4b"
              starSpacing="1px"
            />
          </div>

          <Link to={`/mentor/${item._id}`} className="btn btn-primary">
            See Detail <i className="ti-angle-double-right" />
          </Link>
        </div>
      </div>
    ));
  }
}

const mapStateToProps = state => {
  return {
    mentors: state.main.mentors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMentors: () => dispatch(getMentors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorItem);
