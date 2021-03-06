import React, { Component } from 'react'
import DataTable from "react-data-table-component";

export default class StudentListAdmin extends Component {
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
    const data = [];
    const columns = [
      {
        name: "Mentor Name",
        selector: "name",
        sortable: true
      },
      {
        name: "Teach",
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
          <h1>Student List</h1>
        </div>
        <DataTable
          noHeader={true}
          style={{height:"100%"}}
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
