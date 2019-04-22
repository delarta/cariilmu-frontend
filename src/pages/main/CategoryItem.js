import React, { Component } from "react";
import { connect } from "react-redux";

import { CardBody, CardTitle } from "reactstrap";
import {Link} from 'react-router-dom';
import { getCategories } from '../../actions/mainActions'

class CategoryItem extends Component {

  componentDidMount(){
    this.props.getCategories();
  }

  render() {
    const categories = this.props.categories.slice(0, 8);
    return categories.map((item, index) => (
      <Link  key={index} className="card category-item" to={`/category/${item._id}`}>
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
        </CardBody>
      </Link>

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
