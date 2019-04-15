import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div id="admin-dashboard">
        <div className="dashboard-header">
          <h1>Dashboard </h1>
        </div>
        <div className="dashboard-content">
          <div>
            <h1>{this.props.classes.length} </h1>
            <h2>Class</h2>
          </div>
          <div />
          <div />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.mentor.classes
  };
};

export default connect(mapStateToProps)(Dashboard);
