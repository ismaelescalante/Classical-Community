const Review = require('../models/reviewModel')
const {validate} = require('../models/reviewModel')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const result = await Review.find({})
    res.send(result)
})

router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const review = new Review(req.body)
    await review.save()
    res.send('review creada')
})








module.exports = router