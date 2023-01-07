const connection = require('./connection')

function getAllStudents(db = connection){
    return db('students')
    .select
}

function addStudent(){
    
}

module.exports = {
    getAllStudents,
    addStudent
}