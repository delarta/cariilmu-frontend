import React, { Component } from "react";
import { connect } from "react-redux";

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

class MentorListAdmin extends Component {
  handleDelete = id => {
    console.log(id);
  };

  handleVerify = id => {
    console.log(id);
  };

  render() {
    const data = this.props.mentors;
    console.log(data);
    const columns = [
      {
        text: "Id",
        dataField: "_id",
        hidden: true
      },
      {
        text: "Mentor Name",
        dataField: "name",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Email",
        dataField: "email",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Classes",
        dataField: "class.length",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Status",
        dataField: "verified",
        sort: true,
        filter: textFilter(),
        formatter: (cell, row) =>
          row.verified ? (
            <span style={{ color: "green" }}>Verified</span>
          ) : (
            <span style={{ color: "red" }}>Unverified</span>
          )
      },
      {
        text: "Actions",
        dataField: "actions",
        isDummyField: true,
        formatter: (cell, row) =>
          !row.verified ? (
            <div className="action-buttons">
              <button
                className="btn btn-warning"
                onClick={() => this.handleVerify(row._id)}
              >
                Verify
              </button>
              <button
                className="btn btn-danger"
                onClick={() => this.handleDelete(row._id)}
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="action-buttons">
              <button className="btn disabled">Verify</button>
              <button
                className="btn btn-danger"
                onClick={() => this.handleDelete(row._id)}
              >
                Delete
              </button>
            </div>
          )
      }
    ];
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Mentor List</h1>
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
    mentors: state.admin.mentors
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorListAdmin);
