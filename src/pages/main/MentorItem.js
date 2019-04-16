import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getMentors } from "../../actions/mainActions";

class MentorItem extends Component {
  componentDidMount() {
    this.props.getMentors();
  }
  render() {
    const {mentors} = this.props;

    let filteredMentor = "";
    if (this.props.searchItem !== undefined) {
      filteredMentor = mentors.filter(item => {
        return item.name.toLowerCase().indexOf(this.props.searchItem) !== -1;
      });
    } else {
      filteredMentor = mentors.reverse().slice(0, 3);
    }
    console.log(filteredMentor);
    return filteredMentor.map(item => (
      <div className="mentor-item" key={item._id}>
        <div className="mentor-img">
          <img src={item.photo} alt={item.photo} />
        </div>
        <div className="mentor-right">
          <h3>{item.name}</h3>
          <p>{item.bio}</p>
          
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
