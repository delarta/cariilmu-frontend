import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../actions/adminActions";
import { getRole } from "../../actions/mainActions";


class SignInAdmin extends Component {
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
    this.props.role === "admin" && this.props.history.push("/admin");

    console.log(this.props)

    return (
      <div className="auth-container auth-admin">
        <div className="auth-banner" />
        <div className="container auth-page">
          <div className="auth-page-content">
            <h1 className="text-center mb-3">Sign In | Admin</h1>
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
                <Button color="danger">Sign In</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
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
    },
    getRole: () => {
      dispatch(getRole())
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignInAdmin)
);
