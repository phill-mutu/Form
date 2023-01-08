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

export function addStudent (name, surname, email, dob, username, password, age) {
    const newStudent = {
        name, 
        surname, 
        email, 
        dob, 
        username, 
        password, 
        age
    }

    return (dispatch) => {
        postStudent(newStudent)
        .then((obj) => {
            const { newId } = obj
            newStudent.id = newId

            dispatch(saveOneStudent(newStudent))

        })
    }
}