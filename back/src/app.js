const express = require('express')
require('dotenv').config({ path: '../src/.env' })

const app = express()

require('./startup/db')()
require('./startup/routes')(app)

 app.listen(5000, console.log('Escuchando en el puerto 5000'))