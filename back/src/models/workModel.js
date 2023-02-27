const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const reviewSchema = new mongoose.Schema({
    conductor: {type: String, required: true},
    year: {type: String, required: true},
    orchestra: {type: String, required: true},
    label: {type: String, required: true},
    review: {type: String, required: true},
    author: {type: String},
    id: String
})
const workSchema = new mongoose.Schema({
    title: String,
    composer: String,
    idWork: String,
    reviews: [{type: new mongoose.Schema(reviewSchema)}]
})

const Work = mongoose.model('works', workSchema)



function validateWork(work){
    const schema = Joi.object({
        title: Joi.string(),
        composer: Joi.string(),
        idWork: Joi.string(),
        reviews: Joi.array().items(Joi.object({
            conductor: Joi.string().required(),
            year: Joi.string().required(),
            orchestra: Joi.string().required(),
            label: Joi.string().required(),
            review: Joi.string().required(),
            author: Joi.string(),
            id: Joi.string()
        }))
    })

    return schema.validate(work)
}

module.exports = Work;
module.exports.validate = validateWork;
