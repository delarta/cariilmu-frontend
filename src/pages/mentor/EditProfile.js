import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { editProfile } from "../../actions/mentorActions";

import avatar from "../../assets/img/user.svg";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    let mentor_profile = this.props.mentor;
    this.state = {
      id: mentor_profile._id,
      name: mentor_profile.name,
      username: mentor_profile.username,
      email: mentor_profile.email,
      bio: mentor_profile.bio,
      birthday: mentor_profile.birthday,
      certificate: mentor_profile.certificate,
      ektpNumber: mentor_profile.ektpNumber,
      ektp: mentor_profile.ektp,
      photo: mentor_profile.photo,
      file: ""
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.editProfile(
      this.state.id,
      this.state.name,
      this.state.bio,
      this.state.birthday,
      this.state.photo,
      this.state.ektp,
      this.state.ektpNumber,
      this.state.certificate
    );
  };

  getPhoto = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.files[0]
    });
  };
  render() {
    console.log(this.props.mentor);
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Profile</h1>
        </div>
        <Form onSubmit={this.onSubmit} className="content-body">
          <div>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                disabled
                value={this.state.username}
                type="text"
                name="username"
                id="username"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                disabled
                value={this.state.email}
                type="text"
                name="email"
                id="email"
              />
            </FormGroup>
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
              <Label for="birthday">Birthdate</Label>
              <Input
                onChange={this.onChange}
                value={this.state.birthday}
                type="date"
                name="birthday"
                id="birthday"
              />
            </FormGroup>
            <FormGroup>
              <Label for="ektpNumber">E-Ktp Number</Label>
              <Input
                onChange={this.onChange}
                value={this.state.ektpNumber}
                type="text"
                name="ektpNumber"
                id="ektpNumber"
              />
            </FormGroup>
            <FormGroup>
              <Label for="ektimg">E-Ktp</Label>
              {this.props.mentor !== undefined && (
                <div id="ektimg">
                  <img
                    src={this.props.mentor.ektp}
                    alt={this.props.mentor.ektp}
                    style={{ width: "50%" }}
                  />
                </div>
              )}
              <input
                type="file"
                onChange={this.getPhoto}
                name="ektp"
                id="ektp"
              />
              <label htmlFor="ektp">Upload ektp</label>
            </FormGroup>

            <FormGroup>
              <Label for="certificateimg">Certificate</Label>
              {this.props.mentor !== undefined && (
                <div id="certificateimg">
                  <img
                    src={this.props.mentor.certificate[0]}
                    alt={this.props.mentor.certificate[0]}
                    style={{ width: "50%" }}
                  />
                </div>
              )}
              <input
                type="file"
                onChange={this.getPhoto}
                name="certificate"
                id="certificate"
              />
              <label htmlFor="certificate">Upload Certificate(s)</label>
            </FormGroup>

            <button className="btn btn-info">Submit</button>
          </div>
          <div className="text-center">
            <div>
              {this.props.mentor === undefined ? (
                <img src={avatar} alt={avatar} style={{ width: "60%" }} />
              ) : (
                <img
                  src={this.props.mentor.photo}
                  alt={this.props.mentor.photo}
                  style={{ width: "60%" }}
                />
              )}
            </div>
            <input
              type="file"
              onChange={this.getPhoto}
              name="photo"
              id="photo"
            />
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

const mapDispatchToProps = dispatch => {
  return {
    editProfile: (
      id,
      name,
      bio,
      birthday,
      photo,
      ektp = undefined,
      ektpNumber,
      certificate
    ) =>
      dispatch(editProfile(id, name, bio, birthday, photo, ektp, ektpNumber, certificate))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditProfile)
);
