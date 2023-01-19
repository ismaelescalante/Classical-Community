const Joi = require('joi')


function validateReview(review){
    const schema = Joi.object({
        conductor: Joi.string().required(),
        year: Joi.string().required(),
        orchestra: Joi.string().required(),
        label: Joi.string().required(),
        review: Joi.string().required(),
        author: Joi.string(),
        id: Joi.string()
    })

    return schema.validate(review)
}

module.exports.validateReview = validateReview;