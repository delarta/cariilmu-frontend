import React, { Component } from "react";
import { Table } from "reactstrap";
import ModalConfirmation from "../../components/ModalConfirmation";
import ModalInvoice from "../../components/ModalInvoice";
import { getCart } from "../../actions/studentActions";
import { connect } from "react-redux";

class cart extends Component {
  constructor(props) {
		super(props);
		this.state = {
			 active:0
    };
  }
  
  componentDidMount() {
    this.props.getCart();
  }

  render() {
    console.log(this.props.students);
    return (
      <div className="sectio">
        <div className="box2">
          <h2 style={{ textShadow: "-1px -2px 2px #233142", color: "white" }}>
            Class Cart
          </h2>
        </div>

        <div className="box1">
          <Table bordered className="table">
            <thead style={{ backgroundColor: "#4f9da6", borderRadius: "3%" }}>
              <tr>
                <th>NO</th>
                <th>CLASS NAME</th>
                <th>PRICE</th>
                <th>PAYMENT</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "white" }}>
              {this.props.students.map((item, index) => (
                <tr key={index}>
                  <th> {index +1} </th>
                  <td>{item.class !== null ? item.class.name : "No Name"}</td>
                  <td>{item.class !== null ? item.class.fee : "No Fee"}</td>
                  <td>
                    {item.status === "unpaid" ? (
                      <ModalConfirmation id_payment={item.class._id} InitialModalState={false} />
                    ) : (
                       <ModalInvoice id_payment={item.class._id} InitialModalState={false} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
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
