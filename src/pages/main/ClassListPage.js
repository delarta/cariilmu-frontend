import React, { Component } from "react";
import {
  Container,
  Input
} from "reactstrap";
import ClassItem from "./ClassItem";
import { connect } from "react-redux";
import { getClass } from "../../actions/mainActions";
import Header from "../../layouts/Header";

class ClassListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    this.props.getClass();
  }

  handleChange = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="class-page">
          <div>
            <div className="search">
              <Container>
                
                <Input onChange={this.handleChange} placeholder="Search Class..." />
                
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

const mapStateToProps = state => {
  return { classes: state.main.classes };
};

const mapDispatchToProps = dispatch => {
  return {
    getClass: () => dispatch(getClass())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassListPage);
