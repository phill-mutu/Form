import { fetchAllStudents, postStudent } from '../apis/studentApi'

 export const SAVE_ALL_STUDENTS = 'SAVE_ALL_STUDENTS'
 export const SAVE_ONE_STUDENT = 'SAVE_ONE_STUDENT'

// ACTION CREATORS

function saveAllStudents (students) {
    return {
        type: SAVE_ALL_STUDENTS,
        students
    }
}

function saveOneStudent (student) {
    return {
        type: SAVE_ONE_STUDENT,
        student
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

export function addStudent (newStudent) {
    console.log(newStudent)
    return (dispatch) => {
        postStudent(newStudent)

            dispatch(saveOneStudent(newStudent))

    }
}