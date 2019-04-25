import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { confirmPayment } from '../actions/studentActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class ModalConfirmation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modal: false,
			backdrop: true,
			loading: false,
			photo: '',
		};

		this.toggle = this.toggle.bind(this);
		this.changeBackdrop = this.changeBackdrop.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal,
		}));
	}

	changeBackdrop(e) {
		let value = e.target.value;
		if (value !== 'static') {
			value = JSON.parse(value);
		}
		this.setState({ backdrop: value });
	}

	handlePayment = classid => {
		classid.preventDefault();
		if (this.state.photo === '') {
			MySwal.fire({
				title: 'Failed Transaction',
				text: 'Please Provide Photo!',
				type: 'error',
			});
		} else {
			this.props.confirmPayment(this.props.id_payment, this.state.photo);
			this.toggle()
		
		}
	};

	getPhoto = e => {
		e.preventDefault();
		this.setState({
			photo: e.target.files[0],
		});
	};

	render() {
		const classId = this.props.id_payment;
		return (
			<div>
				<Button color="danger" onClick={this.toggle} block>
					Unpaid
				</Button>

				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
					backdrop={this.state.backdrop}
				>
					{this.props.students
						.filter(item => item._id === classId)
						.map(item => (
							<Form onSubmit={this.handlePayment}>
								<ModalHeader toggle={this.toggle}> CONFIRMATION</ModalHeader>
								<ModalBody>
									<Form>
										<FormGroup row>
											<Label for="id" sm={3}>
												ID Transaksi
											</Label>
											<Col sm={9}>
												<Input type="id" name="id" id="id" placeholder="" value={item._id} />
											</Col>
										</FormGroup>

										<FormGroup row>
											<Label for="item" sm={3}>
												Item
											</Label>
											<Col sm={9}>
												<Input
													type="item"
													name="item"
													id="item"
													placeholder=""
													value={item.class !== null ? item.class.name : 'No Name'}
												/>
											</Col>
										</FormGroup>

										<FormGroup row>
											<Label for="price" sm={3}>
												Price
											</Label>
											<Col sm={9}>
												<Input
													type="price"
													name="price"
													id="price"
													placeholder=""
													value={item.class !== null ? item.class.fee : 'No Fee'}
												/>
											</Col>
										</FormGroup>

										<FormGroup row>
											<Label for="bank" sm={3}>
												Bank
											</Label>
											<Col sm={9}>
												<Input
													type="bank"
													name="bank"
													id="bank"
													placeholder=""
													value={item.bank + '  a/n   ' + item.beneficiaryBank}
												/>
											</Col>
										</FormGroup>

										<FormGroup row>
											<Label for="rek" sm={3}>
												No Rek
											</Label>
											<Col sm={9}>
												<Input
													type="rek"
													name="rek"
													id="rek"
													placeholder=""
													value={item.accountNumber}
												/>
											</Col>
										</FormGroup>

										<FormGroup row>
											<Label for="exampleFile" sm={3}>
												File
											</Label>
											<Col sm={9}>
												<Input
													type="file"
													name="file"
													id="exampleFile"
													onChange={this.getPhoto}
													required
												/>
												<label htmlFor="exampleFile">upload</label>
											</Col>
										</FormGroup>
									</Form>
								</ModalBody>
								<ModalFooter>
									<Button type="submit" color="primary">
										Submit
									</Button>
								</ModalFooter>
							</Form>
						))}
				</Modal>
			</div>
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
		confirmPayment: (classid, photo) => dispatch(confirmPayment(classid, photo)),
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalConfirmation);
