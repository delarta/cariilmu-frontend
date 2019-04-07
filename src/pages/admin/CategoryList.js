import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { connect } from "react-redux";

class CategoryList extends Component {
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
    const data = this.props.categories;
    const columns = [
      {
        name: "Category Name",
        selector: "name",
        sortable: true
      },
      {
        name: "Status",
        selector: "confirmed",
        sortable: true,
        right: true,
        ignoreRowClick: true,
        cell: row => <button className="btn btn-danger" key={row._id}>Delete</button>
      }
    ];
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Categories</h1>
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
    categories: state.admin.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
