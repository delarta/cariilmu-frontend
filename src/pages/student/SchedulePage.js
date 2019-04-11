import React, { Component } from "react";
import { Button } from "reactstrap";
import Logo from "../../assets/img/schedule.jpg";

import ModalConfirmation from "../../components/ModalConfirmation";
import { connect } from "react-redux";
import { getClass } from "../../actions/mainActions";

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
        {this.props.classes.map((item, index) => {
          return (
            <div key={index}className="class-box">
            <div className="img1">
              <img src={Logo} alt={Logo} />
            </div>
            <h2> {item.name}</h2>
            <p>
              <i className="ti-calendar" /> {item.schedule}{" "}
            </p>
            <p>
              <i className="ti-alarm-clock" /> {item.durationInMinutes}{" "}
            </p>
            <ModalConfirmation initialState={false} />
          </div>
          )

        })
          
        }
          

        
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

