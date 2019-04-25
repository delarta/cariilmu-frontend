import React, { Component } from "react";
import { connect } from "react-redux";
import { getSchedule } from "../../actions/studentActions";
import Header from "../../layouts/Header";
import "./SchedulePage.scss";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

class SchedulePage extends Component {
  componentWillMount() {
    this.props.getSchedule();
  }

  render() {
    const data =
      this.props.students.class !== undefined ? this.props.students.class : [];
    const columns = [
      {
        text: "Id",
        dataField: "_id",
        hidden: true
      },
      {
        text: "Class Name",
        dataField: "name",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Mentor",
        dataField: "mentor.name",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Schedule",
        dataField: "schedule",
        sort: true,
        formatter: (cell, row) => (
          <span>{new Date(row.schedule).toDateString()}</span>
        )
      },
      {
        text: "Status",
        dataField: "status",
        sort: true,
        formatter: (cell, row) =>
          row.status === "finished" ? (
            <span style={{ color: "red" }}>{row.status}</span>
          ) : (
            <span style={{ color: "green" }}>{row.status}</span>
          )
      }
    ];
    return (
      <React.Fragment>
        <Header />
        <div className="sectio">
          <div className="box2">
            <h2 style={{ textShadow: "-1px -2px 2px #233142", color: "white" }}>
              {" "}
              My Schedule
            </h2>
          </div>

          <div className="box1">
            <div className="container">
              <BootstrapTable
                className="table-responsive"
                keyField="_id"
                data={data}
                columns={columns}
                striped
                hover
                filter={filterFactory()}
                pagination={paginationFactory()}
                bootstrap4={true}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    students: state.main.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSchedule: () => dispatch(getSchedule())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchedulePage);
