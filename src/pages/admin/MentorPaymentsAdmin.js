import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteClass, verifyMentorPayment } from "../../actions/adminActions";

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class PaymentsAdmin extends Component {
  handleVerify = id => {
    MySwal.fire({
      title: <p>Forward Payment to Mentor ?</p>,
      type: "question",
      confirmButtonText: "Yes",
      showCancelButton: true
    }).then(result => {
      if (result.value) {
        this.props.verifyMentorPayment(id);
        MySwal.fire({
          title: <p>Payment Forwarded</p>,
          type: "success"
        });
      }
    });
  };
  render() {
    const { mentorPayments } = this.props;
   
    const data = mentorPayments;
    const columns = [
      {
        text: "Id",
        dataField: "_id",
        hidden: true
      },
      {
        text: "Mentor Name",
        dataField: "mentor.name",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Class Name",
        dataField: "class.name",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Status",
        dataField: "status",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Amount",
        dataField: "amount",
        sort: true
      },
      {
        text: "Commission",
        dataField: "commission",
        sort: true
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
                  onClick={() => this.handleVerify(row.class._id)}
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
          <h1>Mentor Payments</h1>
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
    mentorPayments: state.admin.mentorPayments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteClass: id => dispatch(deleteClass(id)),
    verifyMentorPayment: id => dispatch(verifyMentorPayment(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentsAdmin);
