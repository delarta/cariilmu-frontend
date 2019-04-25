import React, { Component } from "react";
import { Button } from "reactstrap";
import ModalConfirmation from "../../components/ModalConfirmation";
import ModalInvoice from "../../components/ModalInvoice";
import { getCart } from "../../actions/studentActions";
import { connect } from "react-redux";
import Header from "../../layouts/Header";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  componentDidMount() {
    this.props.getCart();
  }

  render() {
    const data = this.props.students !== undefined ? this.props.students : [];
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
        text: "Fee",
        dataField: "class.fee",
        sort: true,
        filter: textFilter()
      },
      {
        text: "Status",
        dataField: "status",
        sort: true,
        formatter: (cell, row) =>
          row.status === "paid" ? (
            <ModalInvoice id_payment={row._id} InitialModalState={false} />
          ) : row.status === "pending" ? (
            <Button color="warning" onClick={this.toggle} block>
              Pending
            </Button>
          ) : (
            <ModalConfirmation id_payment={row._id} InitialModalState={false} />
          )
      }
    ];
    return (
      <React.Fragment>
        <Header />
        <div className="sectio">
          <div className="box2">
            <h2 style={{ textShadow: "-1px -2px 2px #233142", color: "white" }}>
              Class Cart
            </h2>
          </div>

          <div className="box1">
            <div className="container">
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
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    students: state.main.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCart: () => dispatch(getCart())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cart);
