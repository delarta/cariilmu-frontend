import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteStudent } from "../../actions/adminActions";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class StudentListAdmin extends Component {
  handleDelete = id => {
    MySwal.fire({
      title: <p>Delete Student ?</p>,
      type: "question",
      confirmButtonText: "Yes",
      showCancelButton: true
    }).then(result => {
      if (result.value) {
        this.props.deleteStudent(id);
        MySwal.fire({
          title: <p>Student Deleted</p>,
          type: "success"
        });
      }
    });
  };
  render() {
    const data = this.props.students;
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

const mapDispatchToProps = dispatch => {
  return {
    deleteStudent: id => dispatch(deleteStudent(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentListAdmin);
