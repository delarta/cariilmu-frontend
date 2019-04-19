import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteClass, verifyPayment } from "../../actions/adminActions";

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class PaymentsAdmin extends Component {
  handleVerify = id => {
    MySwal.fire({
      title: <p>Verify Payment ?</p>,
      type: "question",
      confirmButtonText: "Yes",
      showCancelButton: true
    }).then(result => {
      if (result.value) {
        this.props.verifyPayment(id);
        MySwal.fire({
          title: <p>Payment Verified</p>,
          type: "success"
        });
      }
    });
  };
  render() {
    const { classes, payments } = this.props;
    let paymentClass = payments.map(item => {
      item.class = classes.filter(classitem => classitem._id === item.class)[0];
      return item;
    });
    console.log(classes);

    console.log(paymentClass);

    const data = paymentClass;
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
        text: "Created At",
        dataField: "createdAt",
        sort: true,
        filter: textFilter(),
        formatter: (cell, row) => new Date(row.createdAt).toDateString()
      },
      {
        text: "Status",
        dataField: "status",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Actions",
        dataField: "actions",
        isDummyField: true,
        formatter: (cell, row) => {
          if (row.status === "pending") {
            return (
              <div className="action-buttons">
                <button
                  className="btn btn-warning"
                  onClick={() => this.handleVerify(row._id)}
                >
                  Verify
                </button>
              </div>
            );
          } else if (row.status === "paid") {
            return (
              <div className="action-buttons">
                <button className="btn disabled">Verify</button>
              </div>
            );
          } else if (row.status === "unpaid") {
            return (
              <div className="action-buttons">
                <button className="btn disabled">Verify</button>
              </div>
            );
          }
        }
      }
    ];
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Payments</h1>
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
    classes: state.admin.classes,
    payments: state.admin.payments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteClass: id => dispatch(deleteClass(id)),
    verifyPayment: id => dispatch(verifyPayment(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentsAdmin);
