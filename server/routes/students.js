const express = require('express')
const router = express.Router()

const db = require('../db/dbFuncs')

router.get('/', (req, res) => {
    // res.json( {worked: true})
    db.getAllStudents()
    .then(students => {
        res.json(students)
    })
    .catch(err => {
        res.send(err.message)
    })
})

router.post('/', (req, res) => {
    db.addStudent(req.body)
    .then(idArr => {
        res.json({ newId: idArr[0] })
    })
})

module.exports = router