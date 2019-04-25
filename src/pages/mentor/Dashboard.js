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
          <div>
            <h1> {this.props.payments.summary !== undefined ? this.props.payments.summary.paid.toLocaleString('id-ID') : "0" } </h1>
            <h2>Wallet (Rp)</h2>
          </div>
          <div>
          <h1>{this.props.mentor.avgRating} <i className="ti-star"/> </h1>
            <h2>Rating</h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.mentor.classes,
    payments: state.mentor.payments,
    mentor: state.mentor.mentor
  };
};

export default connect(mapStateToProps)(Dashboard);
