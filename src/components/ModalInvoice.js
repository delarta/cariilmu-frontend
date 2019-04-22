import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Form } from 'reactstrap';
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
						.map(item => (
							<Form>
								<ModalHeader toggle={this.toggle}> INVOICE</ModalHeader>
								<ModalBody>
                    <p> {" ID TRANSAKSI  :  " + item._id}</p>
                    <p> {" BANK  :  " + item.bank}</p>
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
