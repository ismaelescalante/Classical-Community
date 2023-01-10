const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    posts: {post: String}
})

const User = mongoose.model('users', userSchema)

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        posts: {post: Joi.string()}
    })

    return schema.validate(user)
}

module.exports = User;
module.exports.validate = validateUser;