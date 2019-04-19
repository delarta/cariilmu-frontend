import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import teaching from "../../assets/img/teaching.png";
import audience from "../../assets/img/audience.png";
import revenue from "../../assets/img/revenue.png";
import money from "../../assets/img/money.png";
import sharing from "../../assets/img/sharing.png";
import rating from "../../assets/img/star.png";
import { create } from "domain";
import Header from "../../layouts/Header"
import "./HomepageMentor.scss";


class HomepageMentor extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
      <div className="home-page">
        <div className="home-head">
        </div>
        <section id="head">
          <Container className="head-grid">
            <div className="head-text-flex">
              <h2>
                Teach on CariIlmu
              </h2>
              <br/>
              <h3>
                Share your knowledge with many students
              </h3>
                <h3>   around in your cities.
                </h3>
              <div className="head-buttons">
                <Link className="btn btn-primary" to="/signin-mentor">
                  Start Your Class 
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section id="benefit">
          <h2 className="text-center">Share your Knowledge to Others</h2>
          <Container className="benefit-grid">
            <div>
                <img src={revenue} alt={money} />
              <div className="benefit-text">
                <h4>Earn Money</h4>
                <p>Be a mentor on Cariilmu provides a new income stream. Create your new your opportunity with us and gaining some cash with us!</p>
              </div>
            </div>
              <div>
                <img src={sharing} alt={sharing} />
              <div className="benefit-text">
                <h4>Share the Ideas</h4>
                <p>Updating your knowledge and your capabilities to know more about your expertise with many students with various backgrounds.</p>
              </div>
            </div>
            <div>
                <img src={rating} alt={rating} />
              <div className="benefit-text">
                <h4>Be a Legend!</h4>
                <p>Get the 5 stars rating and break the leaderboard!</p>
              </div>
            </div>
          </Container>
        </section>

        <section id="howto">
            <div className="howteaching">
            <h2 className="text-center">How Teaching Conducted?</h2>

          <Container className="howto-grid flex">
            <div>
                <img src={teaching} alt={teaching} />
              <div className="howto-text">
                <h4>Create Your Class</h4>
                <p>Create your CariIlmu class from home and publish immediately with our easy class upload tool. We provide help every step of the way!</p>
              </div>
            </div>
              <div>
                <img src={audience} alt={audience} />
              <div className="howto-text">
                <h4>Grow Your Audience</h4>
                <p>There are over a million students learning on CariIlmu. We'll show you how to build your presence on the platform, and expand your reach.</p>
              </div>
            </div>
            <div>
                <img src={revenue} alt={revenue} />
              <div className="howto-text">
                <h4>Earn Some Cash!</h4>
                <p>You'll be paid monthly 3 days after you held the classes. You'll got royalty for every student who attend your classes, forever.</p>
              </div>
            </div>
          </Container>
          </div>
        </section>
        
        <section id="FAQ">
          <Container className="FAQ-grid">
            <div className="question">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-text">
              <div className="text-center">
                <h3>Who can be a mentor on CariIlmu?</h3>
                <p>
                  Anyone can teach a class. As long as your class adheres to our category. It can be published on Cariilmu. There is no cost to publishing a class at all.
                </p>
              </div>
              <div className="text-center">
              <h3>What's included in a Cariilmu class?</h3>
                <p>
                  Cariilmu classes is a platform to helps students meets their mentor one-by-one. The class it will be held on places as replace a classes and the students can ask whatever they want to you.
                </p>
              </div>
              <div className="text-center">
              <h3>What should I teach?</h3>
                <p>
                  Cariilmu classes are for expertise who want to share their knowledge to others, and fall into a variety of categories, including art, music, sport, programming, business, design, language, and mathematic.
                </p>
              </div>
              <div className="text-center">
              <h3>Do I need to promote my classes?</h3>
                <p>
                Cariilmu operates on a membership model, so your class will have a built-in audience from the start. We also have tons of tips to help you promote your class to your own community to help you maximize your success.
                </p>
              </div>
            </div>
          </Container>
        </section>
        
        <section id="SignUp">
        <div className="SignUp">
          <Container className="button-grid">
            <div>
              <h3>Ready to Start Teaching?</h3>
              <p>Create your class and share your skills with millions of students today.</p>
                <Link className="btn btn-outline-primary" to="/signin-mentor">
                  Start a Class 
                </Link>
            </div>
          </Container>
          </div>
        </section>
      </div>
      </React.Fragment>
    );
  }
}

export default HomepageMentor;
