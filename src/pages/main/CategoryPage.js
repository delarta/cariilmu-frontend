import React, { Component } from 'react'
import {Card,CardBody} from 'reactstrap'
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class CategoryPage extends Component {
  render() {
    const categories = this.props.categories;
    return (
        categories.map((item, index) => (
          <Card key={index} className="category-item">
            <i className={item.image} style={{width:"100%"}}></i>
            <CardBody>
              <Link to="/class">{item.name}</Link>
            </CardBody>
          </Card>
        ))
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps)(CategoryPage);

