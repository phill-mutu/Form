const express = require('express')
const router = express.Router()

const db = require('../db/dbFuncs')

router.get('/', (req, res) => {
    // res.json( {worked: true})
    db.getAllStudents()
    .then(students => {
        res.json(students)
    })
})

module.exports = router