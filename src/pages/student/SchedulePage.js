import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { getSchedule } from '../../actions/studentActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../layouts/Header';
import './SchedulePage.scss';

class SchedulePage extends Component {
	componentDidMount() {
		this.props.getSchedule();
	}

	render() {
		console.log('this.props.students.class', this.props.students.class);

		return (
			<React.Fragment>
				<Header />
				<div className="sectio">
					<div className="box2">
						<h2 style={{ textShadow: '-1px -2px 2px #233142', color: 'white' }}> My Schedule</h2>
					</div>

					<div className="box1">
						<Table bordered className="table">
							<thead style={{ backgroundColor: '#4f9da6', borderRadius: '3%' }}>
								<th>NO</th>
								<th>CLASS NAME</th>
								<th>MENTOR</th>
								<th>SCHEDULE</th>
								<th>STATUS</th>
							</thead>
							<tbody style={{ backgroundColor: 'white' }}>
								{this.props.students.class &&
									this.props.students.class.map((item, index) => (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{item.name}</td>
											<td>{item.mentor.name}</td>
											<td>{new Date(item.schedule).toDateString() }</td>
											<td>{item.status === "finished"? (
												 <span style={{ color: "red" }}>Finished</span>
											) :(
												<span style={{ color: "green" }}>Opened</span>
											) }</td>
										</tr>
									))}
							</tbody>
						</Table>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = state => {
	return {
		students: state.main.students,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getSchedule: () => dispatch(getSchedule()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SchedulePage);
