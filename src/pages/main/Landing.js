import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import phone from "../../assets/img/ipad.svg";
import mentor from "../../assets/img/mentor_landing.png";
import classes from "../../assets/img/class_landing.png";
import student from "../../assets/img/student_landing.png";
import { Link } from "react-router-dom";

import Header from "../../layouts/Header";

class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="home">
          <section id="banner">
            <Container className="banner-grid">
              <div className="banner-text">
                <h2>
                  Let's Share and Search Knowledge <br /> with Cariilmu
                </h2>
                <p>
                  Find the knowledge across multiple platform with CariIlmu.
                  CariIlmu is an on demand online educational for your needs. It
                  allows anyone to search and register for offline vocational
                  knowledge published by expertise.
                </p>
                <div className="banner-buttons">
                  <Link className="btn btn-primary" to="/home">
                    Get Started
                  </Link>
                  <Link
                    className="btn btn-outline-primary"
                    to="/homepage-mentor"
                  >
                    Become A Mentor
                  </Link>
                </div>
              </div>
              <div className="banner-img">
                <img src={phone} alt={phone} />
              </div>
            </Container>
          </section>
          <section id="about-us">
            <Container>
              <div className="text-center content">
                <div>
                  <h2>What is Cariilmu ?</h2>
                </div>
                <div>
                  <p>
                    CariIlmu is an online learning community with many of
                    topics, such as : Anyone can join with the community to
                    learn cutting-edge knowledge, network with peers and
                    discover new opportunities. With our currated mentor’s
                    database, you will learn a rich knowledge from any
                    backgrounds experts.
                  </p>
                </div>
              </div>
            </Container>
          </section>
          <section className="fitur one">
            <Container className="fitur-grid">
              <div className="text-center">
                <img src={mentor} alt={mentor} />
              </div>
              <div className="text">
                <h3>Be A Mentor</h3>
                <p>
                  Share your knowledge, help the community and get new income
                  stream while teaching on
                </p>
              </div>
            </Container>
          </section>
          <section className="fitur two">
            <Container className="fitur-grid">
              <div className="text">
                <h3>Enroll to a quality class</h3>
                <p>
                  Take your career ladder faster than other people. Learning can
                  happen anywhere, anytime, and with everyone with CariIlmu.
                  Take a leap of your career for lifetime with learning
                  something new with a professional mentors.
                </p>
              </div>
              <div className="text-center">
                <img src={classes} alt={classes} />
              </div>
            </Container>
          </section>
          <section className="fitur three">
            <Container className="fitur-grid">
              <div className="text-center">
                <img src={student} alt={student} />
              </div>
              <div className="text">
                <h3>Choose your own schedule</h3>
                <p>
                  Get your class based on viability of the schedule from
                  cross-device/ cross-platfrom integrated one with another.
                </p>
              </div>
            </Container>
          </section>
          <section id="misi">
            <Container className="misi-grid">
              <div className="text-center">
                <h2>Mission</h2>
              </div>
              <div className="text-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates neque labore obcaecati, nulla quae magnam placeat
                  voluptatum dolorum vel recusandae molestiae ore aliquid
                  asperiores libero, iste aperiam veniam, impedit quae quibusdam
                  voluptates deserunt repellendus ab dolorum maxime fuga iusto
                  consectetur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur, culpa!
                </p>
              </div>
            </Container>
          </section>
          <section id="download">
            <Container className="download-grid">
              <div>
                <h2>Download our FREE app now!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus beatae quas dolores laudantium praesentium ducimus
                  doloremque itaque cum neque. Aperasperiores repellendus ut
                  explicabo, qui odio. Quibusdam hic quae voluptas recusandae ex{" "}
                </p>

                <Button color="primary">Unduh Sekarang</Button>
              </div>
              <div className="desktop-only">
                <img src={phone} alt={phone} />
              </div>
            </Container>
          </section>
        </div>
      </React.Fragment>
    );
  }
}


export default Landing;
