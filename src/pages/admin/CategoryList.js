import React, { Component } from "react";
import { connect } from "react-redux";

import ModalEditCategory from "../../components/ModalEditCategory";

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

class CategoryList extends Component {
  componentDidMount() {}

  render() {
    const data = this.props.categories;
    const columns = [
      {
        text: "Id",
        dataField: "_id",
        hidden: true
      },
      {
        text: "Category Name",
        dataField: "name",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Actions",
        dataField: "actions",
        isDummyField: true,
        formatter: (cell, row) => <ModalEditCategory classId={row._id} />
      }
    ];

    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Categories</h1>
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
