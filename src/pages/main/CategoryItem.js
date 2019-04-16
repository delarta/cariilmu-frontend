import React, { Component } from "react";
import { connect } from "react-redux";

import { Card, CardBody, CardTitle } from "reactstrap";
import { getCategories } from '../../actions/mainActions'

class CategoryItem extends Component {

  componentDidMount(){
    this.props.getCategories();
  }

  render() {
    const categories = this.props.categories;
    return categories.map((item, index) => (
      <Card key={index} className="category-item">
        <i className={item.image} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
        </CardBody>
      </Card>
    ));
  }
}

const mapStateToProps = state => {
  return {
    categories: state.main.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
