import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import bannervid from "../../assets/vid/banner.mp4";
import ClassItem from "./ClassItem";
import CategoryItem from "./CategoryItem";
import Header from "../../layouts/Header";
import MentorItem from "./MentorItem";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="home-page">
          <div className="home-banner">
            <video autoPlay muted loop className="hero-video" src={bannervid} />
            {this.props.role !== "student" ? (
              <Container className="home-banner-text text-center">
                <h1>Join Us</h1>
                <Link to="/signin" className="btn btn-info">
                  Get started for free
                </Link>
              </Container>
            ) : (
              <Container className="home-banner-text text-center">
                <h1>Welcome, {this.props.student.name}</h1>
                <p>Enjoy your class</p>
              </Container>
            )}
          </div>
          <div className="py-5">
            <Container>
              <h2>Categories</h2>
              <div className="home-category text-center grid-4">
                <CategoryItem />
              </div>
            </Container>
          </div>
          <div className="vh-50 py-5">
            <Container>
              <Link to="/class">
                <h2>Classes</h2>
              </Link>
              <div className="home-class-item text-center">
                <ClassItem />
              </div>
            </Container>
          </div>
          <div className="vh-50 py-5">
            <Container>
              <Link to="/mentors">
                <h2>Our Mentors</h2>
              </Link>
              <div className="home-mentor-item text-center">
                <MentorItem />
              </div>
            </Container>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.role,
    student: state.student.student
  };
};

export default connect(mapStateToProps)(HomePage);
