import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { signUp } from "../../actions/mentorActions";
import { withRouter } from "react-router-dom";
import teach from '../../assets/img/teach.svg'


class SignupUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      username: "",
      password: "",
      password_confirm: ""
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.signUp(
      this.state.name,
      this.state.username,
      this.state.email,
      this.state.password,
      this.handleRedirect
    );
    this.setState({
      email: "",
      name: "",
      username: "",
      password: "",
      password_confirm: ""
    });
  };

  handleRedirect = () => {
    this.props.history.push("/signin-mentor")
  }

  signInMentorStyle = () => {
    return {
      background: `url(${teach}) no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '50%'
    }
  }
  render() {
    return (
      <div className="auth-container" style={this.signInMentorStyle()}>
        <div className="auth-banner mentor" />
        <div className="container auth-page">
          <div className="auth-page-content">
            <h1 className="text-center mb-3">Sign Up | Mentor</h1>
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
                  onChange={this.onChange}
                  value={this.state.password_confirm}
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
    signUp: (name, username, email, password, handleRedirect) => {
      dispatch(signUp(name, username, email, password, handleRedirect));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignupUser)
);
