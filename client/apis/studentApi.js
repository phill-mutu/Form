import request from "superagent";

function fetchAllStudents () {
    return request
    .get('api/v1/students')
    .then(response => response.body)
}

