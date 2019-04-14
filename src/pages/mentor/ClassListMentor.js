import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { setFinishedClass } from "../../actions/mentorActions";
import ModalAddClass from "../../components/ModalAddClass";
import ModalEditClass from "../../components/ModalEditClass";
import ModalShowStudents from "../../components/ModalShowStudentInClass";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class ClassListAdmin extends Component {
  handleFinishedClass = id => {
    MySwal.fire({
      title: <p>Set class to finished ?</p>,
      type: "question",
      confirmButtonText: "Yes",
      showCancelButton: true
    }).then(result => {
      if (result.value) {
        this.props.setFinishedClass(id);
        MySwal.fire({
          title: <p>Class Finished</p>,
          type: "success"
        });
      }
    });
  };

  render() {
    const data = this.props.classes.reverse();

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
        text: "Schedule",
        dataField: "schedule",
        sort: true
      },
      {
        text: "Fee",
        dataField: "fee",
        sort: true
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
      },
      {
        text: "Category",
        dataField: "category.name",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Actions",
        dataField: "actions",
        isDummyField: true,
        formatter: (cell, row) => {
          if (row.status === "finished") {
            return (
              <div className="action-buttons">
                <button className="btn btn-danger disabled">Finished</button>
                <ModalShowStudents classId={row._id} />
              </div>
            );
          } else {
            return (
              <div className="action-buttons">
                <ModalEditClass classId={row._id} />
                <button
                  onClick={() => this.handleFinishedClass(row._id)}
                  className="btn btn-warning"
                >
                  <i className="ti-check" />
                </button>
                <ModalShowStudents classId={row._id} />
              </div>
            );
          }
        }
      }
    ];

    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Class List</h1>
        </div>
        <div
          className="text-left"
          style={{ width: "100%", marginBottom: "1em" }}
        >
          <ModalAddClass initialModalState={false} />
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
    classes: state.mentor.classes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFinishedClass: id => dispatch(setFinishedClass(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassListAdmin);
