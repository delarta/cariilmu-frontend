import React, { Component } from "react";
import { Container } from "reactstrap";
import ClassItem from "./ClassItem";
import Header from "../../layouts/Header";

class CategoryPage extends Component {

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <Header />
        <div className="class-page">
          <div className="class-container">
            <div className="search">
              <div className="text-center">
                <h1>Category</h1>
              </div>
    
            </div>

            <Container>
              <Container className="class-page-content mb-5">
                <ClassItem />
              </Container>
            </Container>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CategoryPage;