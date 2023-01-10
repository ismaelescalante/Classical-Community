const User = require('../userModel')
const {validate} = require ('../userModel')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const result = await User.find({})
    res.send(result)
})

router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const user = new User(req.body)
    await user.save()
    res.send(user)
})

router.post('/')

module.exports = router;