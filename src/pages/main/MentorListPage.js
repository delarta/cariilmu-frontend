import React, { Component } from "react";
import { Container, Input } from "reactstrap";
import MentorItem from "./MentorItem";
import Header from "../../layouts/Header";

class MentorListPage extends Component {
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
        <div className="mentor-page">
          <div className="mentor-container">
            <div className="search">
              <div className="text-center">
                <h1>MENTORS</h1>
              </div>
              <Container>
                <Input
                  onChange={this.handleChange}
                  placeholder="Search Mentor..."
                />
              </Container>
            </div>

            <Container>
              <Container className="mentor-page-content mb-5">
                <MentorItem searchItem={this.state.search} />
              </Container>
            </Container>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MentorListPage;
