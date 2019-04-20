import React, { Component } from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { getClass } from "../../actions/mainActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../layouts/Header";
import "./SchedulePage.scss";

class SchedulePage extends Component {
  componentDidMount() {
    this.props.getClass();
  }

  render() {
    console.log(this.props.classes);
    return (
      <React.Fragment> 
<Header/>
<div className="sectio">
        <div className="box2"> 
            <h2 style={{textShadow: "-1px -2px 2px #233142", color:"white"}}> My Schedule</h2>
        </div>

        <div className="box1">
              <Table bordered className="table">
                      <thead style={{backgroundColor:"#4f9da6", borderRadius:"3%"}}>
                        <tr>
                          <th>NO</th>
                          <th>CLASS NAME</th>
                          <th>MENTOR</th>
                          <th>SCHEDULE DATE</th>
                          <th>DURATION TIME</th>
                          <th>STATUS</th>
                        </tr>
                      </thead>
                      { 
                        this.props.classes.map((item, index) => {
                        return(
                          <tbody key={index} style={{backgroundColor:"white"}}>
                          <tr>
                            <th scope="row"> </th>
                            <td>{item.name}</td>
                            <td> {item.mentor.name}</td>
                            <td>{item.schedule}</td>
                            <td>{item.durationInMinutes}</td>
                            <td>{item.status}</td>
                          </tr>
                        </tbody>
                        )
                      })
                    }
                     
              </Table>
          
        </div>
      </div>
      </React.Fragment>
      
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

