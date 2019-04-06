import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { signUp } from "../../actions/studentActions";
import logo from "../../assets/img/logo_dark.png"

class SignupUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      username: "",
      password: ""
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.signUp(
      this.state.name,
      this.state.username,
      this.state.email,
      this.state.password
    );
    this.setState({
      email: "",
      name: "",
      username: "",
      password: ""
    });
  };
  render() {
    console.log(this.props);

    return (
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
            <h1 className="text-center mb-3">Sign Up</h1>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Full Name</Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="type your full name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.username}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="type your username"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="type your email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="type your password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password_confirm">Confirm Password</Label>
                <Input
                  type="password"
                  name="password_confirm"
                  id="password_confirm"
                  placeholder="retype your password"
                />
              </FormGroup>
              <div className="text-center">
                <Button color="primary">Sign Up</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (name, username, email, password) => {
      dispatch(signUp(name, username, email, password));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignupUser);
