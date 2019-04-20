import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { getClass } from "../../actions/mainActions";

class ClassItem extends Component {
  componentDidMount() {
    this.props.getClass();
  }
  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  render() {
    const { searchItem, classes } = this.props;
    let filteredClass = "";
    console.log(this.props)
    if (searchItem !== undefined) {
      
      filteredClass = classes.filter(item => {
        return item.name.toLowerCase().indexOf(searchItem) !== -1;
      });
  
    } else if (this.props.match.params.categoryId !== undefined) {
      console.log(this.props.match.params.categoryId)
      filteredClass = classes.filter(item =>
        item.category._id === this.props.match.params.categoryId
        )
    }
     else if (this.props.match.path === "/mentor/:mentorId") {
      filteredClass = classes.filter(
        item => item.mentor._id === this.props.match.params.mentorId
      );
    } else {
      filteredClass = classes.reverse().slice(0, 8);
    }
    return filteredClass.map(item => (
      <div className="class-item" key={item._id}>
        <div className="class-img">
          <img src={item.image} alt={item.image} />
        </div>
        <div className="class-right">
          <h3>{item.name}</h3>
          <p className="class-mentor">{item.mentor.name}</p>
          <div className="class-grid">
            <p>
              <i className="ti-calendar" />{" "}
              {new Date(item.schedule).toDateString()}{" "}
            </p>
            <p>
              <i className="ti-alarm-clock" />{" "}
              {`${this.addZero(
                new Date(item.startTime).getHours()
              )}:${this.addZero(
                new Date(item.startTime).getMinutes()
              )} - ${this.addZero(
                new Date(item.endTime).getHours()
              )}:${this.addZero(new Date(item.endTime).getMinutes())}`}
            </p>
          </div>
          <Link to={`/class/${item._id}`} className="btn btn-info">
            See Detail <i className="ti-angle-double-right" />
          </Link>
        </div>
      </div>
    ));
  }
}

const mapStateToProps = state => {
  return {
    classes: state.main.classes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getClass: () => dispatch(getClass())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ClassItem)
);
