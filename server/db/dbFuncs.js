const connection = require('./connection')

function getAllStudents(db = connection){
    return db('students')
    .select()
}

function addStudent(newStudent, db = connection){
    return db('students')
    .insert(newStudent)
    
}

module.exports = {
    getAllStudents,
    addStudent
}