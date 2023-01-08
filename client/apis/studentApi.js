import request from "superagent";

export function fetchAllStudents() {
    return request
    .get('api/v1/students')
    .then(response => response.body)
}

export function postStudent (newStudent) {
    return request
    .post('/api/v1/students')
    .send(newStudent)
    .then(res => res.body)
}
