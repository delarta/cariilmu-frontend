import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { connect } from "react-redux";
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
        name: "Mentor",
        selector: "mentor",
        sortable: true
      },
      {
        name: "Category",
        selector: "category",
        sortable: true
      },
      {
        name: "Fee",
        selector: "fee",
        sortable: true
      }
    ];
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Class List</h1>
        </div>
        <DataTable
          striped={true}
          highlightOnHover={true}
          customTheme={tableStyle}
          columns={columns}
          data={data}
          pagination={true}
          paginationPerPage={10}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.classes
  };
};

export default connect(mapStateToProps)(ClassListAdmin);
