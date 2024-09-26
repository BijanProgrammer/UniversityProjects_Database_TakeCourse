import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

import IcBaselineDelete from '../icons/IcBaselineDelete.jsx';
import IcBaselineEdit from '../icons/IcBaselineEdit.jsx';
import IcBaselineVisibility from '../icons/IcBaselineVisibility.jsx';

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
                <Button variant="dark" className="mb-4" onClick={this.props.openModal.bind(true)}>
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
                            <tr key={ID}>
                                <th scope="row">{ID}</th>
                                <td>{name}</td>
                                <td>{dept_name}</td>
                                <td>{tot_cred}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="action-button"
                                        onClick={this.clickedOnShowButton.bind(this, ID)}
                                    >
                                        <IcBaselineVisibility />
                                    </Button>
                                    <Button
                                        variant="warning"
                                        size="sm"
                                        className="action-button"
                                        onClick={this.clickedOnEditButton.bind(this, ID)}
                                    >
                                        <IcBaselineEdit />
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        className="action-button"
                                        onClick={this.clickedOnDeleteButton.bind(this, ID)}
                                    >
                                        <IcBaselineDelete />
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
    student: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    student: state.student,
});

export default connect(mapStateToProps, { getStudents, selectStudent, editStudent, deleteStudent, openModal })(
    StudentsList
);
