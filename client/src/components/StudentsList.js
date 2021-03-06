import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

import { default as IconDelete } from '@material-ui/icons/Delete';
import { default as IconEdit } from '@material-ui/icons/Edit';
import { default as IconShow } from '@material-ui/icons/Visibility';

import { connect } from 'react-redux';
import { getStudents, selectStudent, editStudent, deleteStudent, openModal } from '../actions/studentActions';
import PropTypes from 'prop-types';

class StudentsList extends Component {
	componentDidMount() {
		this.props.getStudents();
	}

	clickedOnShowButton = (id) => {};

	clickedOnEditButton = (id) => {
		this.props.selectStudent(id);
		this.props.openModal();
	};

	clickedOnDeleteButton = (id) => {
		this.props.deleteStudent(id);
	};

	render() {
		const { students } = this.props.student;

		return (
			<React.Fragment>
				<Button color='dark' style={{ marginBottom: '2rem' }} onClick={this.props.openModal.bind(true)}>
					Add Student
				</Button>

				<Table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Department</th>
							<th>Credit</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{students.map(({ ID, name, dept_name, tot_cred }) => (
							<tr>
								<th scope='row'>{ID}</th>
								<td>{name}</td>
								<td>{dept_name}</td>
								<td>{tot_cred}</td>
								<td>
									<Button
										color='primary'
										size='sm'
										className='action-button'
										onClick={this.clickedOnShowButton.bind(this, ID)}>
										<IconShow />
									</Button>
									<Button
										color='warning'
										size='sm'
										className='action-button'
										onClick={this.clickedOnEditButton.bind(this, ID)}>
										<IconEdit />
									</Button>
									<Button
										color='danger'
										size='sm'
										className='action-button'
										onClick={this.clickedOnDeleteButton.bind(this, ID)}>
										<IconDelete />
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</React.Fragment>
		);
	}
}

StudentsList.propTypes = {
	getStudents: PropTypes.func.isRequired,
	student: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	student: state.student
});

export default connect(mapStateToProps, { getStudents, selectStudent, editStudent, deleteStudent, openModal })(
	StudentsList
);
