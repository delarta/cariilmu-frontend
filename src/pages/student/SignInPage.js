import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../actions/studentActions";

import logo from "../../assets/img/logo_dark.png";
import Header from "../../layouts/Header";

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state.email, this.state.password);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    this.props.role === "student" && this.props.history.push("/home");

    return (
      <React.Fragment>
        <Header />
 <div className="auth-container">
        <div className="auth-banner" />
        <div className="container auth-page">
          <div className="auth-page-content">
            <div className="text-center">
              <img
                src={logo}
                style={{ width: "30%", opacity: "0.8" }}
                alt={logo}
              />
            </div>
            <h1 className="text-center mb-3">Sign In | Student</h1>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="emailStudent">Email</Label>
                <Input
                  required
                  type="email"
                  name="email"
                  id="emailStudent"
                  placeholder="type your email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  required
                  type="password"
                  name="password"
                  id="passwordauth"
                  placeholder="type your password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </FormGroup>
              <div className="text-center">
                <Button color="primary">Sign In</Button>
                <p className="mt-3">
                  Doesn't have an account? <Link to="/signup">Sign Up</Link>{" "}
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    
      </React.Fragment>
     
    );
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.role
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (email, password) => {
      dispatch(signIn(email, password));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignInPage)
);
