import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { addStudent } from '../actions/studentActions';

class StudentModal extends Component {
	state = {
		isOpen: false,
		name: '',
		dept_name: '',
		tot_cred: 0
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		const newStudent = {
			ID: this.state.ID,
			name: this.state.name,
			dept_name: this.state.dept_name,
			tot_cred: this.state.tot_cred
		};

		this.props.addStudent(newStudent);

		this.toggle();
	};

	render() {
		return (
			<div>
				<Button color='dark' style={{ marginBottom: '2rem' }} onClick={this.toggle}>
					Add Student
				</Button>

				<Modal isOpen={this.state.isOpen} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Add to Students List</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for='id'>Name</Label>
								<Input
									type='text'
									name='ID'
									id='id'
									placeholder='Student ID ...'
									onChange={this.onChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for='name'>Name</Label>
								<Input
									type='text'
									name='name'
									id='name'
									placeholder='Student Name ...'
									onChange={this.onChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for='dept-name'>Department</Label>
								<Input
									type='text'
									name='dept_name'
									id='dept-name'
									placeholder='Department Name ...'
									onChange={this.onChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for='tot-cred'>Total Credit</Label>
								<Input
									type='text'
									name='tot_cred'
									id='tot-cred'
									placeholder='Total Credit ...'
									onChange={this.onChange}
								/>
							</FormGroup>
							<Button color='dark' style={{ marginTop: '2rem' }} block>
								Add Student
							</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	student: state.student
});

export default connect(mapStateToProps, { addStudent })(StudentModal);
