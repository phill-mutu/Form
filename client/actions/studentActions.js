import { fetchAllStudents } from '../apis/studentApi'

 export const SAVE_ALL_STUDENTS = 'SAVE_ALL_STUDENTS'

// ACTION CREATORS

function saveAllStudents (students) {
    return {
        type: SAVE_ALL_STUDENTS,
        students
    }
}

// THUNKS

export function getAllStudentsThunk() {
    return (dispatch) => {
        fetchAllStudents()
            .then(students => {
                dispatch(saveAllStudents(students))
            })
    }
}