import React, { Component } from "react";
import {
  Button
} from "reactstrap";
import Logo from "../../assets/img/presentation.svg";
import ModalConfirmation from "../../components/ModalConfirmation";

import "./SchedulePage.scss";

class SchedulePage extends Component {
  render() {
    return (
      <div className="sectio">
          <div className="box1">
            <div className="class-box">
              <div className="img1">
                <img src={Logo} alt={Logo} />
              </div>
              <h2> Code Blok</h2>
              <h5> Harun </h5>
              <p>
                <i className="ti-calendar" /> Kamis, 1 November 2019{" "}
              </p>
              <p>
                <i className="ti-alarm-clock" /> 15.00 - 19.00{" "}
              </p>
              <Button color="success">Paid</Button>{" "}
            </div>

            <div className="class-box">
              <div className="img1">
                <img src={Logo} alt={Logo} />
              </div>
              <h2> Music</h2>
              <h5> Danu </h5>
              <p>
                <i className="ti-calendar" /> Kamis, 1 November 2019{" "}
              </p>
              <p>
                <i className="ti-alarm-clock" /> 15.00 - 19.00{" "}
                
              </p>
              <ModalConfirmation initialModalState={false}/>
            </div>

            <div className="class-box">
              <div className="img1">
                <img src={Logo} alt={Logo} />
              </div>
              <h2> E Sport</h2>
              <h5> Ade Rahman </h5>
              <p>
                <i className="ti-calendar" /> Kamis, 1 November 2019{" "}
              </p>
              <p>
                <i className="ti-alarm-clock" /> 15.00 - 19.00{" "}
              </p>
              <Button color="success">Paid</Button>{" "}
            </div>

            <div className="class-box">
              <div className="img1">
                <img src={Logo} alt={Logo} />
              </div>
              <h2> E Sport</h2>
              <h5> Ade Rahman </h5>
              <p>
                <i className="ti-calendar" /> Kamis, 1 November 2019{" "}
              </p>
              <p>
                <i className="ti-alarm-clock" /> 15.00 - 19.00{" "}
              </p>
              <Button color="success">Paid</Button>{" "}
            </div>

            <div className="class-box">
              <div className="img1">
                <img src={Logo} alt={Logo} />
              </div>
              <h2> E Sport</h2>
              <h5> Ade Rahman </h5>
              <p>
                <i className="ti-calendar" /> Kamis, 1 November 2019{" "}
              </p>
              <p>
                <i className="ti-alarm-clock" /> 15.00 - 19.00{" "}
              </p>
              <Button color="success">Paid</Button>{" "}
            </div>




          </div>
      
      </div>
    );
  }
}

export default SchedulePage;

