import React, { Component } from 'react'
import {CardDeck, Card, CardImg, CardBody, CardText, CardLink} from 'reactstrap'
import {Link} from 'react-router-dom'
import art from "../assets/img/art.svg";
import business from "../assets/img/business.svg";
import tech from "../assets/img/computer_science.svg";
import data_science from "../assets/img/data_science.svg";
import info from "../assets/img/info.svg";
import math from "../assets/img/math.svg";
import personal from "../assets/img/personaldevelopment.svg";
import engineering from "../assets/img/engineer.svg";
import languages from "../assets/img/languages.svg";

class CategoryPage extends Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card>
            <CardBody>
              <CardLink href="#">
              <CardImg style={{width:"100px"}} src={art} alt={art}/>  
              <CardText>art</CardText>
              </CardLink>
            </CardBody>
          </Card>
    </CardDeck>>
      </div>
    )
  }
}

export default CategoryPage
