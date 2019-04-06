import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Card,
  CardBody,
  CardTitle
} from "reactstrap";

class CategoryItem extends Component {
  render() {
    const categories = this.props.categories;
    return (
      categories.map((item, index) => (
          <Card key={index} className="category-item">
            <i className={item.image}></i>
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
            </CardBody>
          </Card>
      ))
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.student.categories
  };
};

export default connect(mapStateToProps)(CategoryItem);
