import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import phone from '../assets/img/ipad.svg'

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="banner">
          <Container className="banner-grid">
            <div className="banner-text">
              <h2>Yuk Cari dan Bagi Ilmumu <br /> bersama Cariilmu</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam iusto accusantium eum harum aliquid debitis! Ratione nam quos neque officia labore! Reiciendis quibusdam minima maxime iste doloribus nobis dolore repellat? Obcaecati, ad dignissimos! Iure suscipit, repudiandae dolorum quae, molestiae ab maiores amet voluptas esse atque rem quo iusto sint?</p>
              <div className="banner-buttons">
                <Button color="primary">Unduh Sekarang</Button>
                <Button color="primary">Daftar Sebagai Tutor</Button>
              </div>
            </div>
            <div className="banner-img">
              <img src={phone} alt={phone}/>
            </div>
          </Container>

        </section>
      </React.Fragment>
    )
  }
}

export default Home
