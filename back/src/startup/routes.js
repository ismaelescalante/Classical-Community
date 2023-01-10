const express = require('express')
const users = require('../routes/users')
const cors = require('cors')

module.exports = function (app){
    app.use(express.json())
    app.use(cors())
    app.use('/users', users)
}