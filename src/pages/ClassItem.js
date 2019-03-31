import React, { Component } from "react";
import { connect } from "react-redux";
import presentation from "../assets/img/presentation.svg";
import { Link } from "react-router-dom";

class ClassItem extends Component {
  render() {
    let filteredClass = '';

    if (this.props.searchItem !== undefined){
      filteredClass = this.props.classes.filter(item => {
        return item.name.toLowerCase().indexOf(this.props.searchItem) !== -1;
      })
    }else{
      filteredClass = this.props.classes;
    }
    return filteredClass.map(item => (
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
  }
}

const mapStateToProps = state => {
  return{
    classes: state.classes
  }
}

export default connect(mapStateToProps)(ClassItem);
