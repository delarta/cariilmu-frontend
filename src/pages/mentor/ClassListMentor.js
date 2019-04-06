import React, { Component } from "react";
import DataTable from "react-data-table-component";
import { connect } from "react-redux";
import { setFinishedClass, getClass } from "../../actions/mentorActions";
import ModalAddClass from '../../components/ModalAddClass';
import ModalEditClass from '../../components/ModalEditClass';
import ModalShowStudents from '../../components/ModalShowStudentInClass';

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
        sortable: true,
        maxWidth: "300px"

      },
      {
        name: "Schedule",
        selector: "schedule",
        sortable: true,
        maxWidth: "150px"

      },
      {
        name: "Fee",
        selector: "fee",
        sortable: true,
        maxWidth: "80px"

      },
      {
        name: "Status",
        selector: "status",
        sortable: true,
        maxWidth: "80px"
      },
      {
        name: "Students",
        button: true,
        ignoreRowClick: true,
        maxWidth: "150px",
        cell: row => <ModalShowStudents classId={row._id} />
        
      },
      {
        name: "Actions",
        button: true,
        maxWidth: "200px",
        right: true,
        cell: row => {
          if(row.status === 'finished'){
            return (
              <div>
                <button className="btn btn-danger disabled">Finished</button> 
              </div>
            )
          }else{
            return (
              <div>
                <ModalEditClass classId={row._id} />
                <button onClick={() => this.props.setFinishedClass(row._id) } className="btn btn-warning">Set Finished</button>
              </div>
            )
          }
           
        },
        ignoreRowClick: true
      }
    ];
    return (
      <div className="content-admin">
        <div className="content-header">
          <h1>Class List</h1>
        </div>
        <div className="text-left" style={{width:'100%',marginBottom:'1em'}}>
          <ModalAddClass initialModalState={false} />
        </div>
        <DataTable
          noHeader={true}
          style={{minHeight:"70%"}}
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
