const path = require('path')
const express = require('express')

const studentRoutes = require('./routes/students')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/students', studentRoutes)

module.exports = server