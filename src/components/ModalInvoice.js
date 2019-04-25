import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

class ModalInvoice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			backdrop: true,
			loading: false,
		};

		this.toggle = this.toggle.bind(this);
		this.changeBackdrop = this.changeBackdrop.bind(this);
		// this.loading = this.loading.bind(this);
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

	render() {
		const classId = this.props.id_payment;
		return (
			<div>
				<Button color="success" onClick={this.toggle} block>
					Paid
				</Button>

				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
					backdrop={this.state.backdrop}
				>
					{this.props.students
						.filter(item => item._id === classId)
						.map((item, index) => (
							<Form key={index}>
								<ModalHeader toggle={this.toggle}> INVOICE</ModalHeader>
								<ModalBody>
									<Label style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
										{' '}
										PT CARI ILMU
									</Label>
									<p style={{ marginBottom: '7%' }}> Transaction Succes</p>
									<ListGroup>
										<ListGroupItem>
											<FormGroup row>
												<Label for="id" sm={3} style={{ fontWeight: 'bold' }}>
													ID
												</Label>

												<Label for="id" sm={7}>
													{':' + item._id}
												</Label>
											</FormGroup>
										</ListGroupItem>
										<ListGroupItem>
											<FormGroup row>
												<Label for="id" sm={3} style={{ fontWeight: 'bold' }}>
													Bank
												</Label>

												<Label for="id" sm={7}>
													{':' + item.bank}
												</Label>
											</FormGroup>
										</ListGroupItem>
										<ListGroupItem>
											<FormGroup row>
												<Label for="id" sm={3} style={{ fontWeight: 'bold' }}>
													No Rek
												</Label>

												<Label for="id" sm={7}>
													{': ' + item.accountNumber}
												</Label>
											</FormGroup>
										</ListGroupItem>
										<ListGroupItem>
											<FormGroup row>
												<Label for="id" sm={3} style={{ fontWeight: 'bold' }}>
													Item
												</Label>

												<Label for="id" sm={7}>
													{':   ' + item.class.name}
												</Label>
											</FormGroup>
										</ListGroupItem>
										<ListGroupItem>
											<FormGroup row>
												<Label for="id" sm={3} style={{ fontWeight: 'bold' }}>
													Price
												</Label>

												<Label for="id" sm={7}>
													{':Rp.  ' + item.class.fee}
												</Label>
											</FormGroup>
										</ListGroupItem>
									</ListGroup>
								</ModalBody>
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

export default connect(mapStateToProps)(ModalInvoice);
