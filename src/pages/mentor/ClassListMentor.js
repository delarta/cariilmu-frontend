import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { connect } from "react-redux";
import { setFinishedClass, getClass } from "../../actions/mentorActions";
import ModalAddClass from '../../components/ModalAddClass';

class ClassListAdmin extends Component {
  componentDidMount() {
    this.props.getClass();
  }
  render() {
    const tableStyle = {
      title: {
        fontSize: "2em"
      },
      header: {
        fontSize: "1.2em"
      },
      rows: {
        fontSize: "0.8em"
      }
    };
    const data = this.props.classes;
    const columns = [
      {
        name: "Class Name",
        selector: "name",
        sortable: true
      },
      {
        name: "Schedule",
        selector: "schedule",
        sortable: true
      },
      {
        name: "Fee",
        selector: "fee",
        sortable: true
      },
      {
        name: "Status",
        selector: "status",
        sortable: true
      },
      {
        name: "Actions",
        sortable: true,
        button: true,
        cell: row => row.status === 'finished' ? <button className="btn btn-danger disabled">Finished</button> : <button onClick={() => this.props.setFinishedClass(row._id) } className="btn btn-warning">Set Finished</button>,
        ignoreRowClick: true
      }
    ];
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Class List</h1>
        </div>
        <div>
          <ModalAddClass initialModalState={false} />
        </div>
        <DataTable
          noHeader={true}
          style={{height:"100%"}}
          striped={true}
          highlightOnHover={true}
          customTheme={tableStyle}
          columns={columns}
          responsive={true}
          data={data}
          pagination={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    classes: state.mentor.classes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFinishedClass: (id) => dispatch(setFinishedClass(id)),
    getClass: () => dispatch(getClass())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClassListAdmin);
