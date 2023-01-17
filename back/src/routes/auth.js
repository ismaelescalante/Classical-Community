const jwt = require('jsonwebtoken')
const express = require('express')
const validator = require('../middleware/validator')
const User = require('../models/userModel')
const Joi = require('joi')
const bcrypt = require('bcrypt')
const router = express.Router()

const reqSchema = Joi.object({
    email: Joi.string().required().email().messages({"any.required": 'Email is required'}),
    password: Joi.string().required().messages({"any.required": 'Password is required'})
})

router.post('/', validator(reqSchema), async (req, res) => {
    let user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('Email or password not valid')

    const isValid = await bcrypt.compare(req.body.password, user.password)
    if(!isValid) return res.status(400).send('Email or password not valid')

    const token = jwt.sign({name: user.name}, process.env.JWT_PRIVATE_KEY)

    res.header('x-auth-token', token).header('access-control-expose-headers', 'x-auth-token').send('Logged in')
})


module.exports = router