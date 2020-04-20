import axios from 'axios';
import { GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT, STUDENTS_LOADING } from './types';

export const getStudents = () => (dispatch) => {
	dispatch(setStudentsLoadnig());

	axios.get('/api/students').then((res) =>
		dispatch({
			type: GET_STUDENTS,
			payload: res.data
		})
	);
};

export const addStudent = (student) => (dispatch) => {
	axios.post('/api/students', student).then((res) =>
		dispatch({
			type: ADD_STUDENT,
			payload: res.data
		})
	);
};

export const deleteStudent = (id) => {
	return {
		type: DELETE_STUDENT,
		payload: id
	};
};

export const setStudentsLoadnig = () => {
	return {
		type: STUDENTS_LOADING
	};
};
