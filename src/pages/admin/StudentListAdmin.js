import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { connect } from "react-redux";

class StudentListAdmin extends Component {
  render() {
    const tableStyle = {
      title: {
        fontSize: "2em"
      },
      header: {
        fontSize: "1.5em"
      },
      rows: {
        fontSize: "1em"
      }
    };
    const data = this.props.students;
    const columns = [
      {
        name: "Student Name",
        selector: "name",
        sortable: true
      },
      {
        name: "Class",
        selector: "class",
        sortable: true,
        right: true,
        cell: row => {
          return (
            <button key={row._id} className="btn btn-info">
              Show
            </button>
          );
        }
      }
    ];
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Student List</h1>
        </div>
        <DataTable
          noHeader={true}
          style={{ height: "100%" }}
          striped={true}
          highlightOnHover={true}
          customTheme={tableStyle}
          columns={columns}
          responsive={true}
          data={data}
          pagination={true}
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
