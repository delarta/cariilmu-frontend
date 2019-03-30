import React, { Component } from "react";
import { Container } from "reactstrap";
import {Link} from "react-router-dom";

import { connect } from 'react-redux';

import bannervid from "../assets/vid/banner.mp4";
import ClassItem from "./ClassItem";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-banner">
          <video autoPlay muted loop className="hero-video" src={bannervid} />
          {this.props.user[0].name === '' ? 
          <Container className="home-banner-text text-center">
            <h1>Join Us</h1>
            <Link to="/signin" className="btn btn-primary">Get started for free</Link>
          </Container> 
          :
          <Container className="home-banner-text text-center">
            <h1>Welcome, {this.props.user[0].name}</h1>
            <p>Enjoy your class</p>
          </Container> 
          }
        </div>
        <div className="vh-50 py-5">
          <Container>
            <h2>Categories</h2>
          </Container>
        </div>
        <div className="vh-50 py-5">
          <Container>
            <Link to='/class'><h2>Classes</h2></Link>
            <div className="home-class-item text-center">
              <ClassItem />
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    user: state.user
    
  }
}

export default connect(mapStateToProps)(HomePage)
