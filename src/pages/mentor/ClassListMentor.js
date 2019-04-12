import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import { setFinishedClass, getClass } from "../../actions/mentorActions";
import ModalAddClass from "../../components/ModalAddClass";
import ModalEditClass from "../../components/ModalEditClass";
import ModalShowStudents from "../../components/ModalShowStudentInClass";

class ClassListAdmin extends Component {
  componentDidMount() {
    this.props.getClass();
  }

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
        sort: true
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
                <button className="btn btn-danger disabled">
                  Finished
                </button>
                <ModalShowStudents classId={row._id} />
              </div>
            );
          } else {
            return (
              <div className="action-buttons">
                <ModalEditClass classId={row._id} />
                <button
                  onClick={() => this.props.setFinishedClass(row._id)}
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
    setFinishedClass: id => dispatch(setFinishedClass(id)),
    getClass: () => dispatch(getClass())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassListAdmin);
