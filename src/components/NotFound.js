import React, { Component } from "react";
import { Link } from "react-router-dom";
import notfound from "../assets/img/not_found.svg";

class NotFound extends Component {
  render() {
    return (
      <div
        className="vh-100"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div>
          <div>
            <img src={notfound} alt={notfound} />
          </div>
          <div className="text-center">
            <h2>
              Sorry, the page you are trying to access is not found, back to{" "}
              <Link to="/">Home</Link>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
