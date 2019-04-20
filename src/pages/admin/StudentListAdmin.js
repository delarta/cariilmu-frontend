import React, { Component } from "react";
import { connect } from "react-redux";

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

class StudentListAdmin extends Component {
  render() {
    const data = this.props.students;
    console.log(data)
    const columns = [
      {
        text: "Id",
        dataField: "_id",
        hidden: true
      },
      {
        text: "Student's Name",
        dataField: "name",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Class",
        dataField: "class.length",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Actions",
        dataField: "actions",
        isDummyData: true,
        formatter: (cell, row) => (
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(row._id)}
          >
            Delete
          </button>
        )
      }
    ];
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Student List</h1>
        </div>

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
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.admin.students
  };
};

export default connect(mapStateToProps)(StudentListAdmin);
