const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)


const reviewSchema = new mongoose.Schema({
    conductor: {type: String, required: true},
    year: {type: String, required: true},
    orchestra: {type: String, required: true},
    label: {type: String, required: true},
    review: {type: String, required: true},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }
})

const Review = mongoose.model('reviews', reviewSchema)

function validateReview(review){
    const schema = Joi.object({
        conductor: Joi.string().required(),
        year: Joi.string().required(),
        orchestra: Joi.string().required(),
        label:  Joi.string().required(),
        review: Joi.string().required(),
        idApi: Joi.string(),
        author: Joi.string()
    })

    return schema.validate(review)
}

module.exports = Review;
module.exports.validate = validateReview;