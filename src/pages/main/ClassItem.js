import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import {getClass} from "../../actions/mainActions"

class ClassItem extends Component {
componentDidMount(){
  this.props.getClass()
}
  render() {
    console.log(this.props)
    const {searchItem, classes} = this.props;
    let filteredClass = "";
    if (searchItem !== undefined) {
      filteredClass = classes.filter(item => {
        return item.name.toLowerCase().indexOf(searchItem) !== -1;
      });
    }else if(this.props.match.path === "/mentor/:mentorId"){
      console.log("im in mentor detail")
      filteredClass = classes.filter(item => item.mentor._id === this.props.match.params.mentorId)
    }
     else {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClassItem));
