import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div id="admin-dashboard">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard-content">
          <div>
            <h1>{this.props.classes.length}</h1>
            <h2>Class</h2>
          </div>
          <div>
            <h1>{this.props.students.length}</h1>
            <h2>Students</h2>
          </div>
          <div>
            <h1>{this.props.mentors.length}</h1>
            <h2>Mentors</h2>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    mentors: state.admin.mentors,
    classes: state.admin.classes,
    students: state.admin.students
  }
}

export default connect(mapStateToProps)(Dashboard)
