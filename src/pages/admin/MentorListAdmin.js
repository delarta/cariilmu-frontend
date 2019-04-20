import React, { Component } from "react";
import { connect } from "react-redux";

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

import { verifyMentor, deleteMentor } from "../../actions/adminActions";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class MentorListAdmin extends Component {
  handleDelete = id => {
    MySwal.fire({
      title: <p>Are You Sure ?</p>,
      type: "question",
      confirmButtonText: "Yes Delete It",
      showCancelButton: true
    }).then(result => {
      if (result.value) {
        this.props.deleteMentor(id);
        MySwal.fire({
          title: <p>Mentor Deleted</p>,
          type: "success"
        });
      }
    });
  };

  handleVerify = id => {
    MySwal.fire({
      title: <p>Verify Mentor ?</p>,
      type: "question",
      confirmButtonText: "Yes",
      showCancelButton: true
    }).then(result => {
      if (result.value) {
        this.props.verifyMentor(id);
        MySwal.fire({
          title: <p>Mentor Verified</p>,
          type: "success"
        });
      }
    });
  };

  render() {
    const data = this.props.mentors;
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
  return {
    verifyMentor: id => dispatch(verifyMentor(id)),
    deleteMentor: id => dispatch(deleteMentor(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorListAdmin);
