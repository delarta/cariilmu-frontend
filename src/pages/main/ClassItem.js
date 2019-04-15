import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {getClass} from "../../actions/mainActions"

class ClassItem extends Component {
componentDidMount(){
  this.props.getClass()
}
  render() {
    let filteredClass = "";
    if (this.props.searchItem !== undefined) {
      filteredClass = this.props.classes.filter(item => {
        return item.name.toLowerCase().indexOf(this.props.searchItem) !== -1;
      });
    } else {
      filteredClass = this.props.classes.reverse().slice(0, 8);
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
              <i className="ti-calendar" /> {new Date (item.schedule).toDateString()}{" "}
            </p>
            <p>
              <i className="ti-alarm-clock" /> 15.00 - 19.00{" "}
            </p>
          </div>
          <Link to={`/class/${item._id}`} className="btn btn-primary">
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

export default connect(mapStateToProps, mapDispatchToProps)(ClassItem);
