import React, { Component } from 'react'
import {CardDeck, Card, CardImg, CardBody, CardText, CardLink} from 'reactstrap'
import art from "../assets/img/art.svg";

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
