import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { connect } from "react-redux";
import { delClass } from "../../actions/adminActions";

class ClassListAdmin extends Component {
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
    const data = this.props.classes;
    const columns = [
      {
        name: "Class Name",
        selector: "name",
        sortable: true
      },
      {
        name: "Actions",
        sortable: true,
        right: true,
        cell: row => (
          <button
            onClick={() => this.props.delClass(row.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        ),
        ignoreRowClick: true
      }
    ];
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Class List</h1>
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
