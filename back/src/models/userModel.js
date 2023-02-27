const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const userSchema = new mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true},
    password: {type: String, required: true},
    isAdmin: Boolean,
})

const User = mongoose.model('users', userSchema)

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        isAdmin: Joi.boolean()
    })

    return schema.validate(user)
}

module.exports = User;
module.exports.validate = validateUser;