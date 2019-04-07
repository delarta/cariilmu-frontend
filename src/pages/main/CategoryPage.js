import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class CategoryPage extends Component {
  render() {
    const categories = this.props.categories;
    return (
      <div className="home-category text-center grid-4">
        {categories.map((item, index) => (
          <Card key={index} className="category-item">
            <i className={item.image} />
            <CardBody>
              <Link to="/class">{item.name}</Link>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.student.categories
  };
};

export default connect(mapStateToProps)(CategoryPage);
