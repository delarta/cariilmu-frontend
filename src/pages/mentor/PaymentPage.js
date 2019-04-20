import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";

class PaymentPage extends Component {

  render() {
    const data = this.props.payments.payment;
    console.log(this.props.payments.payment);
    const columns = [
      {
        text: "Id",
        dataField: "_id",
        hidden: true
      },
      {
        text: "Class Name",
        dataField: "class.name",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Amount",
        dataField: "amount",
        sort: true,
        formatter: (cell, row) => <span>Rp {row.amount}</span>
      },
      {
        text: "Status",
        dataField: "status",
        sort: true,
        formatter: (cell, row) =>
          row.status !== "paid" ? (
            <span style={{ color: "red" }}>{row.status}</span>
          ) : (
            <span style={{ color: "green" }}>{row.status}</span>
          )
      }
    ];

    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Payments</h1>
        </div>
        
        <div className="table-content">
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.mentor.classes,
    mentor: state.mentor.mentor,
    payments: state.mentor.payments
  };
};


export default connect(
  mapStateToProps
)(PaymentPage);
