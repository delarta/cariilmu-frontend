import React, { Component } from "react";
import { Button, Table } from "reactstrap";
import Logo from "../../assets/img/schedule.jpg";

import ModalConfirmation from "../../components/ModalConfirmation";
import { connect } from "react-redux";
import { getClass } from "../../actions/mainActions";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./SchedulePage.scss";

class SchedulePage extends Component {
  componentDidMount() {
    this.props.getClass();
  }

  render() {
    console.log(this.props.classes);
    return (
      <div className="sectio">
        <div className="box1">
        <h2> Schedule Student</h2>

              <Table bordered>
                      <thead style={{backgroundColor:"grey", borderRadius:"3%"}}>
                        <tr>
                          <th>#</th>
                          <th>CLASS NAME</th>
                          <th>SCHEDULE</th>
                          <th>DURATION TIME</th>
                          <th>STATUS</th>
                          <th> status</th>
                        </tr>
                      </thead>
                      {this.props.classes.map((item, index) => {
                        return(
                          <tbody key={index} style={{backgroundColor:"white"}}>
                          <tr>
                            <th scope="row"> {index}</th>
                            <td>{item.name}</td>
                            <td>{item.schedule}</td>
                            <td>{item.durationInMinutes}</td>
                            <td><ModalConfirmation initialModalState={false}/>{" "}</td>
                            <td>{item.status}</td>
                          </tr>
                        </tbody>
                        )
                      })
                    }
                     
              </Table>
          
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    classes: state.main.classes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getClass: () => dispatch(getClass())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchedulePage);

