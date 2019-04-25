import React, { Component } from "react";
import { connect } from "react-redux";

import { CardBody, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions/mainActions";

class CategoryItem extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  bgStyle = image => {
    return {
      background: `linear-gradient(
        rgba(35, 49, 66, 0.7),
        rgba(35, 49, 66, 0.7)
      ),
      url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
  };

  render() {
    const categories = this.props.categories.slice(0, 8);
    return categories.length === 0 ? (
      <Spinner color="info" />
    ) : (
      categories.map((item, index) => (
        <Link
          key={index}
          className="card category-item"
          style={this.bgStyle(item.photo)}
          to={`/category/${item._id}`}
        >
          <CardBody>
            <div className="title">{item.name}</div>
          </CardBody>
        </Link>
      ))
    );
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem);
