import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { addStudent, editStudent, selectStudentOnChange, openModal, closeModal } from '../actions/studentActions';

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
        let idValue = isStudentSelected ? student.ID : '';
        let nameValue = isStudentSelected ? student.name : '';
        let dept_nameValue = isStudentSelected ? student.dept_name : '';
        let tot_credValue = isStudentSelected ? student.tot_cred : '';

        return (
            <div>
                <Modal isOpen={isModalOpen} toggle={this.props.closeModal}>
                    <ModalHeader toggle={this.props.closeModal}>{modalTitle}</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="id">ID</Label>
                                <Input
                                    type="text"
                                    name="ID"
                                    id="id"
                                    value={idValue}
                                    placeholder="Student ID ..."
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={nameValue}
                                    placeholder="Student Name ..."
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="dept-name">Department</Label>
                                <Input
                                    type="text"
                                    name="dept_name"
                                    id="dept-name"
                                    value={dept_nameValue}
                                    placeholder="Department Name ..."
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="tot-cred">Total Credit</Label>
                                <Input
                                    type="text"
                                    name="tot_cred"
                                    id="tot-cred"
                                    value={tot_credValue}
                                    placeholder="Total Credit ..."
                                    onChange={this.onChange}
                                />
                            </FormGroup>
                            <Button color="dark" style={{ marginTop: '2rem' }} block>
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
    student: state.student,
});

export default connect(mapStateToProps, { addStudent, editStudent, selectStudentOnChange, openModal, closeModal })(
    StudentModal
);
