import React, { Component } from "react";
import { connect } from "react-redux";
import { delClass } from "../../actions/adminActions";

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

class ClassListAdmin extends Component {
  render() {
    const data = this.props.classes;
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
        text: "Status",
        dataField: "status",
        sort: true,
        filter: textFilter(),
        formatter: (cell, row) =>
          row.status === "finished" ? (
            <span style={{ color: "red" }}>Finished</span>
          ) : (
            <span style={{ color: "green" }}>Opened</span>
          )
      },
      {
        text: "Actions",
        dataField: "actions",
        isDummyField: true,
        formatter: (cell, row) => (
          <button
            onClick={() => this.props.delClass(row._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        )
      }
    ];
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Class List</h1>
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
    classes: state.admin.classes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delClass: id => dispatch(delClass(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassListAdmin);
