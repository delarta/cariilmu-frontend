import React, { Component } from 'react';
import { Button, CardBody,CardHeader, Card,CardFooter, FormGroup,Label, Col, Input, Container } from 'reactstrap';
import Logo from '../../assets/img/presentation.svg';

import './SchedulePage.css';

class SchedulePage extends Component {

  data =[
    { name :'testing',
      fee:'RP.200.000',
      status : true
    },
    {
      name : 'harun',
      fee : 'RP.100.000',
      status : false
    },
    {
      name : 'adi',
      fee : 'RP.300.000',
      status :true
    }

    
  ]

  


  render() {
   
    console.log(this.data);
     const data = this.data.map ((item, index) => {
       return (
          <div key={index} > 

          </div>
       )
     });
    return (
      <div>
        <section className='section'>
            <div className='box'> 
              <div className="class-box">
                  <div className="img1">
                    <img src={Logo} alt={Logo}/>
                  </div>
                  <h2> Code Blok</h2>

              </div>

              <div className="class-box">
                  <div className="img1">
                    <img src={Logo} alt={Logo}/>
                  </div>
                  <h2> Music</h2>

              </div>
                

              <div className="class-box">
                  <div className="img1">
                    <img src={Logo} alt={Logo}/>
                  </div>
                  <h2> E Sport</h2>
              </div>
            </div>

        </section>
      </div>
    )
  }
}

export default SchedulePage;

