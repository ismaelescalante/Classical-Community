const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reviewModel'
    }]
})

const User = mongoose.model('users', userSchema)

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        posts: Joi.array()
    })

    return schema.validate(user)
}

module.exports = User;
module.exports.validate = validateUser;