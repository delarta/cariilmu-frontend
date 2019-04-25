import React from "react";
import { Table, Modal, ModalHeader, ModalBody } from "reactstrap";
import { connect } from "react-redux";

class ModalShowStudentInClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: props.initialModalState
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const {classes, classId} = this.props;
    let classItem = classes.filter(item => item._id === classId);

    return (
      <React.Fragment>
        <button className="btn btn-info" onClick={this.toggle}>
          {classItem[0].student.length}
        </button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Student List</ModalHeader>
          <ModalBody>
            {classItem[0].student.length !== 0 ? (
              <Table bordered>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Students Name</th>
                  </tr>
                </thead>
                <tbody>
                  {classItem[0].student.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{item.name}</td>
                      </tr>
                    )
                    
                  })}
                </tbody>
              </Table>
            ) : (
              <h5>This class has no student yet</h5>
            )}
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.mentor.classes
  };
};

export default connect(mapStateToProps)(ModalShowStudentInClass);
