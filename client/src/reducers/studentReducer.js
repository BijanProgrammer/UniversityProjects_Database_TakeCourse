import {
    GET_STUDENTS,
    ADD_STUDENT,
    SELECT_STUDENT,
    EDIT_STUDENT,
    DELETE_STUDENT,
    OPEN_MODAL,
    CLOSE_MODAL,
    STUDENTS_LOADING,
} from '../actions/types';

const initialState = {
    students: [],
    selectedStudent: {},
    isModalOpen: false,
    loading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STUDENTS:
            return {
                ...state,
                students: action.payload,
                loading: false,
            };
        case ADD_STUDENT:
            return {
                ...state,
                students: [action.payload, ...state.students],
            };
        case SELECT_STUDENT:
            return {
                ...state,
                selectedStudent: action.payload,
            };
        case EDIT_STUDENT:
            return {
                ...state,
                students: [action.payload, ...state.students.filter((student) => student.ID !== action.payload.ID)],
            };
        case DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter((student) => student.ID !== action.payload),
            };
        case OPEN_MODAL:
            if (action.payload)
                return {
                    ...state,
                    selectedStudent: {},
                    isModalOpen: true,
                };

            return {
                ...state,
                isModalOpen: true,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                selectedStudent: {},
                isModalOpen: false,
            };
        case STUDENTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
}
