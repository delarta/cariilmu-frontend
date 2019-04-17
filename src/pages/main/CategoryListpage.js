import React, { Component } from "react";
import { Container,InputGroup,Input,InputGroupAddon,Button } from "reactstrap";
import { connect } from "react-redux";

import "./CategoryListpage.scss";

class CategoryListpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };
  render() {
    return (
      <div className="category-search">
        <div className="container">
          <InputGroup size="lg">
            <Input onChange={this.handleChange} placeholder="Search" />
            <InputGroupAddon addonType="append">
              <Button color="primary">
                <i className="ti-search" /> Search{" "}
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <Container className="category-search-content mt-2 mb-5">
            <Category searchItem={this.state.search} />
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { category: state.student.classes };
};

export default connect(mapStateToProps)(CategoryListpage);