import React, { Component } from "react";
import { Container, Input } from "reactstrap";
import ClassItem from "./ClassItem";
import Header from "../../layouts/Header";

class ClassListPage extends Component {
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
      <React.Fragment>
        <Header />
        <div className="class-page">
          <div className="class-container">
            <div className="search">
              <div className="text-center">
                <h1>CLASSES</h1>
              </div>
              <Container>
                <Input
                  onChange={this.handleChange}
                  placeholder="Search Class..."
                />
              </Container>
            </div>

            <Container>
              <Container className="class-page-content mb-5">
                <ClassItem searchItem={this.state.search} />
              </Container>
            </Container>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ClassListPage;
