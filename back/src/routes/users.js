const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const {validate} = require ('../models/userModel')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const result = await User.find({})
    res.send(result)
})

router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    let user = await User.findOne({email: req.body.email})
    if(user) return res.status(400).send('User already exists')

    user = new User(req.body)

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)

    user.password = hash
    await user.save()
    res.send({name: user.name, email: user.email})
})

router.post('/')

module.exports = router;