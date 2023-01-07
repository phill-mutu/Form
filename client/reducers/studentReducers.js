import { SAVE_ALL_STUDENTS } from '../actions/studentActions'

function studentReducer (state = [], action) {
    switch (action.type){
        case SAVE_ALL_STUDENTS:
            return action.students
        default:    
            return state
    }
}

export default studentReducer