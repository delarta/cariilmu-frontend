import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import avatar from "../../assets/img/thinking.svg";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    let mentor_profile = this.props.mentor;
    this.state = {
      name: mentor_profile.name,
      username: mentor_profile.username,
      email: mentor_profile.email,
      bio: mentor_profile.bio,
      certificate: mentor_profile.certificate,
      eKtpNumber: mentor_profile.eKtpNumber,
      eKtp: mentor_profile.eKtp,
      photo: mentor_profile.photo
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Profile</h1>
        </div>
        <Form className="content-body">
          <div>
            <FormGroup>
              <Label for="name">Full Name</Label>
              <Input
                onChange={this.onChange}
                value={this.state.name}
                type="text"
                name="name"
                id="name"
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
              />
            </FormGroup>
            <FormGroup>
              <Label for="bio">Bio</Label>
              <Input
                onChange={this.onChange}
                value={this.state.bio}
                type="textarea"
                name="bio"
                id="bio"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                onChange={this.onChange}
                value={this.state.email}
                type="text"
                name="email"
                id="email"
              />
            </FormGroup>
          </div>
          <div className="text-center">
            <div>
              <img src={avatar} alt={avatar} style={{ width: "60%" }} />
            </div>
            <input type="file" name="photo" id="photo" />
            <label htmlFor="photo">Change Avatar</label>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mentor: state.mentor.mentor
  };
};

export default connect(mapStateToProps)(EditProfile);
