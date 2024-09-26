import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addStudent, closeModal, editStudent, openModal, selectStudentOnChange } from '../actions/studentActions';

class StudentModal extends Component {
    onChange = (e) => {
        let editedStudent = { ...this.props.student.selectedStudent[0] };
        editedStudent[e.target.name] = e.target.value;
        this.props.selectStudentOnChange([editedStudent]);
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.editStudent(this.props.student.selectedStudent[0]);

        this.props.closeModal();
    };

    render() {
        const { selectedStudent, isModalOpen } = this.props.student;
        const isStudentSelected = Object.keys(selectedStudent).length !== 0;

        let student = selectedStudent[0];

        let modalTitle = isStudentSelected ? 'Edit Student' : 'Add to Students List';
        let idValue = student?.ID || '';
        let nameValue = student?.name || '';
        let dept_nameValue = student?.dept_name || '';
        let tot_credValue = student?.tot_cred || '';

        return (
            <div>
                <Modal show={isModalOpen} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>{modalTitle}</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="id" column={true}>
                                    ID
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ID"
                                    id="id"
                                    value={idValue}
                                    placeholder="Student ID ..."
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="name" column={true}>
                                    Name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={nameValue}
                                    placeholder="Student Name ..."
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="dept-name" column={true}>
                                    Department
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="dept_name"
                                    id="dept-name"
                                    value={dept_nameValue}
                                    placeholder="Department Name ..."
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="tot-cred" column={true}>
                                    Total Credit
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="tot_cred"
                                    id="tot-cred"
                                    value={tot_credValue}
                                    placeholder="Total Credit ..."
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Button type="submit" variant="dark" className="mt-4">
                                Add Student
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    student: state.student,
});

export default connect(mapStateToProps, { addStudent, editStudent, selectStudentOnChange, openModal, closeModal })(
    StudentModal
);
