import axios from 'axios';
import {
    GET_STUDENTS,
    ADD_STUDENT,
    SELECT_STUDENT,
    EDIT_STUDENT,
    DELETE_STUDENT,
    OPEN_MODAL,
    CLOSE_MODAL,
    STUDENTS_LOADING,
} from './types';

axios.defaults.baseURL = 'http://localhost:5000';

export const getStudents = () => (dispatch) => {
    dispatch(setStudentsLoadnig());

    axios.get('/api/students').then((res) =>
        dispatch({
            type: GET_STUDENTS,
            payload: res.data,
        })
    );
};

export const addStudent = (student) => (dispatch) => {
    axios.post('/api/students', student).then((res) =>
        dispatch({
            type: ADD_STUDENT,
            payload: res.data,
        })
    );
};

export const selectStudent = (id) => (dispatch) => {
    axios.get(`/api/students/${id}`).then((res) =>
        dispatch({
            type: SELECT_STUDENT,
            payload: res.data,
        })
    );
};

export const selectStudentOnChange = (student) => (dispatch) => {
    dispatch({
        type: SELECT_STUDENT,
        payload: student,
    });
};

export const editStudent = (student) => (dispatch) => {
    axios.post('/api/students/', student).then((res) =>
        dispatch({
            type: EDIT_STUDENT,
            payload: res.data,
        })
    );
};

export const deleteStudent = (id) => (dispatch) => {
    axios.delete(`/api/students/${id}`).then((res) =>
        dispatch({
            type: DELETE_STUDENT,
            payload: id,
        })
    );
};

export const openModal =
    (clearSelectedStudent = false) =>
    (dispatch) => {
        dispatch({ type: OPEN_MODAL, payload: clearSelectedStudent });
    };

export const closeModal = () => (dispatch) => {
    dispatch({ type: CLOSE_MODAL });
};

export const setStudentsLoadnig = () => {
    return {
        type: STUDENTS_LOADING,
    };
};
