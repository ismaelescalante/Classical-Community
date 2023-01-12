const express = require('express')
const users = require('../routes/users')
const auth = require('../routes/auth')
const reviews = require('../routes/reviews')
const works = require('../routes/works')
const cors = require('cors')

module.exports = function (app){
    app.use(express.json())
    app.use(cors())
    app.use('/users', users)
    app.use('/auth', auth)
    app.use('/reviews', reviews)
    app.use('/works', works)
}