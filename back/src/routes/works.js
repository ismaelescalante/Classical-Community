const Work = require('../models/workModel')
const {validate} = require('../models/workModel')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const result = await Work.find({})
    res.send(result)
})

router.get('/:id', async (req, res) => {
    const result = await Work.findOne({idWork: req.params.id}).select('title composer reviews')
    res.send(result)
})

router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const work = new Work(req.body)
    await work.save()
    res.send('work saved')
})

router.put('/:id', async(req, res) => {
    // const {error} = validate(req.body)
    // if(error) return res.status(400).send(error.details[0].message)
    const result = await Work.findOneAndUpdate({idWork: req.params.id}, { $push: {reviews: req.body}})
    
    res.send("Updated")
})



module.exports = router