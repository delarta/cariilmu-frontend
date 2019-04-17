import React, { Component } from "react";
import { Container, Button } from "reactstrap";
import phone from "../../assets/img/ipad.svg";
import presentation from "../../assets/img/presentation.svg";
import gift from "../../assets/img/gift.svg";
import thinking from "../../assets/img/thinking.svg";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="home">
        <section id="banner">
          <Container className="banner-grid">
            <div className="banner-text">
              <h2>
                Yuk Cari dan Bagi Ilmumu <br /> bersama Cariilmu
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                aperiam iusto accusantium eum harum aliquid debitis! Ratione nam
                quos neque officia labore! Reiciendis quibusdam minima maxime
                iste doloribus nobis dolore repellat? Obcaecati, ad dignissimos!
                Iure suscipit, repudiandae dolorum quae, molestiae ab maiores
                amet voluptas esse atque rem quo iusto sint?
              </p>
              <div className="banner-buttons">
                <Link className="btn btn-primary" to="/home">
                  Get Started
                </Link>
                <Link className="btn btn-primary" to="/homepage-mentor">
                  Become A Mentor 
                </Link>
              </div>
            </div>
            <div className="banner-img">
              <img src={phone} alt={phone} />
            </div>
          </Container>
        </section>
        <section id="keunggulan">
          <h2 className="text-center">the excellence</h2>
          <Container className="keunggulan-grid">
            <div>
              <img src={presentation} alt={presentation} />
              <h3>Classes are varied</h3>
              <p>Find your passion in the various classes</p>
            </div>
            <div>
              <img src={thinking} alt={thinking} />
              <h3>Skilled mentor</h3>
              <p>Currated mentor from the best campus</p>
            </div>
            <div>
              <img src={gift} alt={gift} />
              <h3>Awesome Reward</h3>
              <p>Get the awesome reward if you earn enough poin</p>
            </div>
          </Container>
        </section>
        <section className="fitur">
          <Container className="fitur-grid">
            <div className="text-center">
              <img src={phone} alt={phone} />
            </div>
            <div>
              <h3>Find your desired class</h3>
              <p>Find your dream class anywhere and whenever you need it</p>
            </div>
          </Container>
        </section>
        <section className="fitur">
          <Container className="fitur-grid">
            <div>
              <h3>Enroll to a quality class</h3>
              <p>
                Enroll to your desired class anywhere and whenever you need it
              </p>
            </div>
            <div className="text-center">
              <img src={phone} alt={phone} />
            </div>
          </Container>
        </section>
        <section className="fitur">
          <Container className="fitur-grid">
            <div className="text-center">
              <img src={phone} alt={phone} />
            </div>
            <div>
              <h3>Choose your own schedule</h3>
              <p>
                Enroll to your desired class anywhere and whenever you need it
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
            <div>
              <img src={phone} alt={phone} />
            </div>
          </Container>
        </section>
      </div>
    );
  }
}

export default Landing;
