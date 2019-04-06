import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { connect } from "react-redux";

class MentorListAdmin extends Component {
  componentDidMount() {}

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
    const data = this.props.mentors;
    const columns = [
      {
        name: "Mentor Name",
        selector: "name",
        sortable: true
      },
      {
        name: "Status",
        selector: "confirmed",
        sortable: true,
        right: true,
        cell: row => (row.confirmed ? "Verified" : "Unverified")
      }
    ];
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Mentor List</h1>
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
