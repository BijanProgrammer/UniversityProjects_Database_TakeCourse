import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getStudents, deleteStudent } from '../actions/studentActions';
import PropTypes from 'prop-types';

class StudentsList extends Component {
	componentDidMount() {
		this.props.getStudents();
	}

	onDeleteClick = (id) => {
		this.props.deleteStudent(id);
	};

	render() {
		const { students } = this.props.student;

		return (
			<ListGroup>
				<TransitionGroup className='students-list'>
					{students.map(({ ID, name, dept_name, tot_cred }) => (
						<CSSTransition key={ID} timeout={500} classNames='fade'>
							<ListGroupItem>
								<Button
									className='remove-btn'
									color='danger'
									size='sm'
									onClick={this.onDeleteClick.bind(this, ID)}>
									&times;
								</Button>
								{ID}. {name} ({dept_name}) {tot_cred}
							</ListGroupItem>
						</CSSTransition>
					))}
				</TransitionGroup>
			</ListGroup>
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

export default connect(mapStateToProps, { getStudents, deleteStudent })(StudentsList);
