const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)


const workSchema = new mongoose.Schema({
    title: String,
    composer: String,
    idWork: String,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reviewModel'
    }]
})

const Work = mongoose.model('works', workSchema)

function validateWork(work){
    const schema = Joi.object({
        title: Joi.string(),
        composer: Joi.string(),
        idWork: Joi.string(),
        reviews: Joi.array()
    })

    return schema.validate(work)
}

module.exports = Work;
module.exports.validate = validateWork;